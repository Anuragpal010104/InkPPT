from django.shortcuts import render
from django.http import FileResponse
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import status
from .serializers import ImageUploadSerializer
import os


# Create your views here.


class ImagesToPptView(APIView):
    permission_classes = [IsAuthenticated]
    parser_classes = (MultiPartParser, FormParser)
    def post(self, request, *args, **kwargs):
        serializer = ImageUploadSerializer(data=request.data)
        if serializer.is_valid():
            images = serializer.validated_data['images']
            # Generate ppt from images here using the model
            file_path = os.path.join('media','presentation.pptx')
            if os.path.exists(file_path):
                response = FileResponse(open(file_path,'rb'), content_type='application/vnd.openxmlformats-officedocument.presentationml.presentation')
                response['Content-Disposition'] = 'attachment; filename=presentation.pptx'
                return response
            return Response("Images Validated but path invalid", status.HTTP_200_OK)
        return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)
