SET IDENTITY_INSERT [dbo].[Product] ON 

INSERT [dbo].[Product] ([Id], [Name], [Quantity], [AddedToCart],[CategoryId]) VALUES (1, N'���', 1,1, 5)
INSERT [dbo].[Product] ([Id], [Name], [Quantity], [AddedToCart],[CategoryId]) VALUES (6, N'���', 1,1 ,2)
INSERT [dbo].[Product] ([Id], [Name], [Quantity], [AddedToCart],[CategoryId]) VALUES (9, N'�����', 1,1, 2)
INSERT [dbo].[Product] ([Id], [Name], [Quantity], [AddedToCart],[CategoryId]) VALUES (10, N'���', 10,0, 4)
INSERT [dbo].[Product] ([Id], [Name], [Quantity], [AddedToCart],[CategoryId]) VALUES (11, N'������', 4,1, 3)
INSERT [dbo].[Product] ([Id], [Name], [Quantity], [AddedToCart],[CategoryId]) VALUES (12, N'���� ���', 5,0, 1)

SET IDENTITY_INSERT [dbo].[Product] OFF
GO



SET IDENTITY_INSERT [dbo].[Category] ON 
INSERT [dbo].[Category] ([Id], [Title] ) VALUES (1, N'����� ������')
INSERT [dbo].[Category] ([Id], [Title] ) VALUES (2, N'������')
INSERT [dbo].[Category] ([Id], [Title] ) VALUES (3, N'����� ������')
INSERT [dbo].[Category] ([Id], [Title] ) VALUES (4, N'���� �����')
INSERT [dbo].[Category] ([Id], [Title] ) VALUES (5, N'������')
SET IDENTITY_INSERT [dbo].[Category] OFF
GO
