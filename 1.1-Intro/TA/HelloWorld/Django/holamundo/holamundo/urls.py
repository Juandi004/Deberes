from django.urls import path
from saludo import views
urlpatterns = [
path('hola/', views.hola_mundo, name='hola_mundo'),
]