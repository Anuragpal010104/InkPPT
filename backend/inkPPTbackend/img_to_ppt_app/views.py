import uuid
from django.shortcuts import render
from django.http import FileResponse
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import status
from .serializers import ImageUploadSerializer
import os

from .ml.main import generate_presentation_from_images

# Create your views here.


class ImagesToPptView(APIView):
    permission_classes = [IsAuthenticated]
    parser_classes = (MultiPartParser, FormParser)
    def post(self, request, *args, **kwargs):
        serializer = ImageUploadSerializer(data=request.data)
        if serializer.is_valid():
            images = serializer.validated_data['images']
            file_name = f"{uuid.uuid4()}.pptx"
            file_path = os.path.join('media',file_name)

            try:
                generate_presentation_from_images(images,file_path)
            except Exception as e:
                print("Error:",str(e))
                return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            if os.path.exists(file_path):
                response = FileResponse(open(file_path,'rb'), content_type='application/vnd.openxmlformats-officedocument.presentationml.presentation')
                response['Content-Disposition'] = 'attachment; filename=presentation.pptx'
                print("Returning response")
                return response
            print("presentation not generated")
            return Response({"error":"Presentation not generated"}, status.HTTP_500_INTERNAL_SERVER_ERROR)
        return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)
