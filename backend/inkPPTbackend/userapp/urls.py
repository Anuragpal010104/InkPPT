from django.urls import path
from .views import UserCreateView, LoginView

urlpatterns = [
    path('api/register/',UserCreateView.as_view(), name='user-register'),
    path('api/login/',LoginView.as_view(), name='user-login'),
]