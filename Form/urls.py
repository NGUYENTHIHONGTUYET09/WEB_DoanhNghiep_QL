from django.urls import path
from .views import GetFormByID, GetFormType, CreateForm, FormView, UpdateFormView

urlpatterns = [
    path('forms/update/<str:id>/', UpdateFormView.as_view(), name="update_form"),
    path('forms/create/', CreateForm.as_view(), name="create_form"),
    path('forms/types/', GetFormType.as_view(), name="get_form_type"),
    path('forms/<str:id>/', GetFormByID.as_view(), name="get_form_by_id"),
    path('forms/', FormView.as_view(), name='get_forms')
]
