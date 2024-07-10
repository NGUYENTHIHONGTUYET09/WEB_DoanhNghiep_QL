use ACM;

-- Sample data for Position
INSERT INTO Position (id, position) VALUES
('550e8400-e29b-41d4-a716-446655440000', 'Manager'),
('550e8400-e29b-41d4-a716-446655440001', 'Developer'),
('550e8400-e29b-41d4-a716-446655440002', 'Designer');

-- Sample data for Role
INSERT INTO Role (id, role) VALUES
('550e8400-e29b-41d4-a716-446655440003', 'Admin'),
('550e8400-e29b-41d4-a716-446655440004', 'User'),
('550e8400-e29b-41d4-a716-446655440005', 'Guest');

-- Sample data for Employee
INSERT INTO Employee (id, image, name, citizen_id, phone, birthdate, appointment_date) VALUES
('550e8400-e29b-41d4-a716-446655440006', NULL, 'Alice Johnson', 'CIT123456', '123-456-7890', '1985-06-15 00:00:00', '2020-01-01 09:00:00'),
('550e8400-e29b-41d4-a716-446655440007', NULL, 'Bob Smith', 'CIT654321', '098-765-4321', '1990-08-25 00:00:00', '2019-05-15 09:00:00'),
('550e8400-e29b-41d4-a716-446655440008', NULL, 'Carol White', 'CIT789012', '555-555-5555', '1987-03-30 00:00:00', '2021-02-20 09:00:00');
INSERT INTO Employee (id, image, name, citizen_id, phone, birthdate, appointment_date) VALUES
('21520425', NULL, 'Nguyễn Hoàng Quý', '187897777', '0911178179','2003-02-06', '2023-02-20 09:00:00');
INSERT INTO Employee (id, image, name, citizen_id, phone, birthdate, appointment_date) VALUES
('21520426', NULL, 'Nguyễn Văn A', '123456789', '0987654321', '2000-01-01', '2024-05-31 09:00:00');

-- Sample data for Users
INSERT INTO Users (id, username, password, role_id, employee_id) VALUES
('550e8400-e29b-41d4-a716-446655440009', 'alice', 'password123', '550e8400-e29b-41d4-a716-446655440003', '550e8400-e29b-41d4-a716-446655440006'),
('550e8400-e29b-41d4-a716-44665544000A', 'bob', 'password456', '550e8400-e29b-41d4-a716-446655440004', '550e8400-e29b-41d4-a716-446655440007'),
('550e8400-e29b-41d4-a716-44665544000B', 'carol', 'password789', '550e8400-e29b-41d4-a716-446655440005', '550e8400-e29b-41d4-a716-446655440008');

-- Sample data for Room
INSERT INTO Room (id, name) VALUES
('550e8400-e29b-41d4-a716-44665544000C', 'Conference Room A'),
('550e8400-e29b-41d4-a716-44665544000D', 'Meeting Room B'),
('550e8400-e29b-41d4-a716-44665544000E', 'Workshop Room C');

INSERT INTO TIMESLOT (ID, NAME) VALUES
("e76e1800-f0a6-43f8-bc34-9947e137709b", "7:00 AM - 9:00 AM"),
("5138741e-8599-414a-92bc-cb7ba3bbfd8c", "9:00 AM - 11:00 AM"),
("68d46f97-5983-4ba4-bd26-55917cb9f336", "11:00 AM - 13:00 PM"),
("e7a2cf32-66d0-42b4-938d-2c8d6c2e9a8f", "13:00 PM - 15:00 PM"),
("bfaa7b99-72b3-4e0c-8b76-6462d5b4b16f", "15:00 PM - 17:00 PM");

-- Sample data for BookingRoom
INSERT INTO BookingRoom (id, employee_id, room_id, timeslot_id, date) VALUES
('550e8400-e29b-41d4-a716-44665544000F', '550e8400-e29b-41d4-a716-446655440006',
'550e8400-e29b-41d4-a716-44665544000C', "e76e1800-f0a6-43f8-bc34-9947e137709b", '2024-06-01T17:00:00.000Z'),
('550e8400-e29b-41d4-a716-446655440010', '550e8400-e29b-41d4-a716-446655440007',
'550e8400-e29b-41d4-a716-44665544000D', "5138741e-8599-414a-92bc-cb7ba3bbfd8c", '2024-05-31T17:00:00.000Z'),
('550e8400-e29b-41d4-a716-446655440011', '550e8400-e29b-41d4-a716-446655440008',
'550e8400-e29b-41d4-a716-44665544000E', "bfaa7b99-72b3-4e0c-8b76-6462d5b4b16f", '2024-05-31T17:00:00.000Z');


-- Sample data for Notification
INSERT INTO Notification (id, title, content, created_at, updated_at) VALUES
('550e8400-e29b-41d4-a716-446655440012', 'Meeting Reminder', 'Reminder for the meeting scheduled at 10:00 AM', '2023-04-30 08:00:00', '2023-04-30 08:00:00'),
('550e8400-e29b-41d4-a716-446655440013', 'System Update', 'The system will be down for maintenance from 2:00 PM', '2023-04-29 14:00:00', '2023-04-29 14:00:00'),
('550e8400-e29b-41d4-a716-446655440014', 'New Policy', 'Please review the new company policy on remote work', '2023-04-28 09:00:00', '2023-04-28 09:00:00');

INSERT INTO NotificationType (id, name)
VALUES
('07cb5f2c-4b58-4f0d-9331-d8f22d472c07', 'IMPORTANT'), -- important
('1a366e48-d616-4d45-8d82-fc051576c8b8', 'DIRECTIVE'), -- directive
('2984a3a1-ec76-4fe0-a40e-95a1b5e98fcf', 'REMINDER'), -- reminder
('58e0e7ab-7a48-4692-86aa-af89852cc0bb', 'GENERAL'), -- general
('dece0560-1868-4dbd-9209-0f780c7c04e7', 'MEETING'); -- meeting

-- Sample data for EmployeeNotification
INSERT INTO EmployeeTypeNotification (id, employee_id, type_id, notification_id, created_at) VALUES
('550e8400-e29b-41d4-a716-446655440015', '550e8400-e29b-41d4-a716-446655440006', '2984a3a1-ec76-4fe0-a40e-95a1b5e98fcf', '550e8400-e29b-41d4-a716-446655440012', '2023-04-30 09:00:00'),
('550e8400-e29b-41d4-a716-446655440016', '550e8400-e29b-41d4-a716-446655440007', '1a366e48-d616-4d45-8d82-fc051576c8b8', '550e8400-e29b-41d4-a716-446655440013', '2023-04-29 15:00:00'),
('550e8400-e29b-41d4-a716-446655440017', '550e8400-e29b-41d4-a716-446655440008', '58e0e7ab-7a48-4692-86aa-af89852cc0bb', '550e8400-e29b-41d4-a716-446655440014', '2023-04-28 10:00:00');

-- Sample data for EmployeeRolePosition
INSERT INTO EmployeeRolePosition (id, position_id, role_id, employee_id, assigned_at) VALUES
('550e8400-e29b-41d4-a716-446655440018', '550e8400-e29b-41d4-a716-446655440000', '550e8400-e29b-41d4-a716-446655440003', '550e8400-e29b-41d4-a716-446655440006', '2020-01-01 09:00:00'),
('550e8400-e29b-41d4-a716-446655440019', '550e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440004', '550e8400-e29b-41d4-a716-446655440007', '2019-05-15 09:00:00'),
('550e8400-e29b-41d4-a716-44665544001A', '550e8400-e29b-41d4-a716-446655440002', '550e8400-e29b-41d4-a716-446655440005', '550e8400-e29b-41d4-a716-446655440008', '2021-02-20 09:00:00');


INSERT INTO EmployeeRolePosition (id, position_id, role_id, employee_id, assigned_at) VALUES
('b7be7510-33fa-4797-8a64-11bc4749178e', '550e8400-e29b-41d4-a716-446655440000', '550e8400-e29b-41d4-a716-446655440003', '21520425', '2020-01-01 09:00:00');
INSERT INTO EmployeeRolePosition (id, position_id, role_id, employee_id, assigned_at) VALUES
('b7be7510-33fa-4797-8a64-11bc4749178f', '550e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440004', '21520426', '2024-05-31 09:00:00');


-- Step 1: Insert sample data into FormType table
INSERT INTO FormType (id, name) VALUES
('f1c2a3d4-5678-9101-1121-314151617181', 'Xin phép vắng họp'),
('f2c3a4d5-6789-0112-2131-415161718192', 'Yêu cầu tăng ca');

-- Step 2: Insert sample data into Form table
-- Make sure to replace 'e1c2a3d4-5678-9101-1121-314151617181' and 'e2c3a4d5-6789-0112-2131-415161718192' with actual Employee IDs from your database.
INSERT INTO Form (id, employee_id, type_id, title, content, status, created_at) VALUES
('f3c4a5d6-7890-1121-3141-516171819202', '550e8400-e29b-41d4-a716-446655440006', 'f1c2a3d4-5678-9101-1121-314151617181', 'Xin nghỉ họp tuần', 'Tôi xin phép nghỉ họp tuần này vì có công việc đột xuất.', 'Pending', NOW()),
('f4c5a6d7-8901-2131-4151-617181920212', '550e8400-e29b-41d4-a716-446655440007', 'f2c3a4d5-6789-0112-2131-415161718192', 'Đề nghị tăng ca cuối tuần', 'Tôi đề nghị tăng ca vào cuối tuần để hoàn thành dự án.', 'Approved', NOW());

INSERT INTO FORM(id, employee_id, type_id, title, content, status, created_at) VALUES
('f4c5a6d7-8901-2131-4151-617182220212', '21520425', 'f2c3a4d5-6789-0112-2131-415161718192', 'Đề nghị tăng ca cuối tuần', 'Tôi đề nghị tăng ca vào cuối tuần để hoàn thành dự án.', 'Approved', NOW());
