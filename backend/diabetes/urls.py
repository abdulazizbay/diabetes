from django.urls import path
from .views import *

urlpatterns = [
    path('api', InfoListAPI.as_view(),name='info_api'),
    path('', index)
]