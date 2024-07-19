from django.urls import path
from .views import ImagesToPptView

urlpatterns = [
    path('api/generateppt/', ImagesToPptView.as_view(), name="generate-ppt"),
]