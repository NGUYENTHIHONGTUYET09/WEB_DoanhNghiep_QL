from django.urls import path
from .views import RegisterView, LoginView, VerifyTokenView

urlpatterns = [
    path('auth/login/', LoginView.as_view(), name="Login"),
    path('auth/register/', RegisterView.as_view(), name="Register"),
    path('auth/verify-token/', VerifyTokenView.as_view(), name="verify-token")
]