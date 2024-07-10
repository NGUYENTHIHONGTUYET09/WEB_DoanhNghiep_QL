from django.shortcuts import render, get_object_or_404
from django.contrib.auth.hashers import check_password

from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from All_models.models import User
from .serializers import RegisterSerializer, LoginSerializer
from ACM_BE.settings import SECRET_KEY

from datetime import datetime, timedelta
import jwt


class RegisterView(APIView):
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response("Create Success", status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            username = serializer.validated_data.get('username')
            password = serializer.validated_data.get('password')

            # Tìm user theo username
            user = get_object_or_404(User, username=username)

            # Kiểm tra mật khẩu
            if not check_password(password, user.password):
                return Response({"error": "Sai mật khẩu"}, status=status.HTTP_400_BAD_REQUEST)

            # Tạo token nếu mật khẩu đúng
            token = self.generate_jwt_token(user)
            return Response({"access_token": token}, status=status.HTTP_200_OK)

        # Trả về lỗi nếu dữ liệu không hợp lệ
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @classmethod
    def generate_jwt_token(cls, user):
        # Thời gian hết hạn của token
        expiry_time = datetime.utcnow() + timedelta(hours=1)

        # Tạo payload của token
        payload = {
            'employee_name': user.employee.name,
            'employee_id': user.employee.id,
            'role_name': user.role.role,
            'role_id': user.role.id,
            'exp': expiry_time
        }

        # Tạo token bằng cách mã hóa payload và sử dụng secret key
        token = jwt.encode(payload, SECRET_KEY, algorithm='HS256')
        return token


class VerifyTokenView(APIView):
    def post(self, request):
        token = request.headers.get('Authorization').replace('Bearer ', '')
        if not token:
            return Response({"error": "Token không được cung cấp"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            # Giải mã token và kiểm tra tính hợp lệ
            payload = jwt.decode(token, SECRET_KEY, algorithms=['HS256'])
            return Response({"valid": True, "payload": payload}, status=status.HTTP_200_OK)
        except jwt.ExpiredSignatureError:
            return Response({"error": "Token đã hết hạn"}, status=status.HTTP_400_BAD_REQUEST)
        except jwt.InvalidTokenError:
            return Response({"error": "Token không hợp lệ"}, status=status.HTTP_400_BAD_REQUEST)
