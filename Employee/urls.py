from django.urls import path
from .views import EmployeeView, UploadEmployeeView

urlpatterns = [
    path('employees/create/', UploadEmployeeView.as_view(), name="create_employee"),
    path('employees/', EmployeeView.as_view(), name='get_employee')
]
