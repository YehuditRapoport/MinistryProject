SET IDENTITY_INSERT [dbo].[Product] ON 

INSERT [dbo].[Product] ([Id], [Name], [Quantity], [AddedToCart],[CategoryId]) VALUES (1, N'לחם', 1,1, 5)
INSERT [dbo].[Product] ([Id], [Name], [Quantity], [AddedToCart],[CategoryId]) VALUES (6, N'חלב', 1,1 ,2)
INSERT [dbo].[Product] ([Id], [Name], [Quantity], [AddedToCart],[CategoryId]) VALUES (9, N'גבינה', 1,1, 2)
INSERT [dbo].[Product] ([Id], [Name], [Quantity], [AddedToCart],[CategoryId]) VALUES (10, N'עוף', 10,0, 4)
INSERT [dbo].[Product] ([Id], [Name], [Quantity], [AddedToCart],[CategoryId]) VALUES (11, N'עגבניה', 4,1, 3)
INSERT [dbo].[Product] ([Id], [Name], [Quantity], [AddedToCart],[CategoryId]) VALUES (12, N'סבון גוף', 5,0, 1)

SET IDENTITY_INSERT [dbo].[Product] OFF
GO



SET IDENTITY_INSERT [dbo].[Category] ON 
INSERT [dbo].[Category] ([Id], [Title] ) VALUES (1, N'מוצרי ניקיון')
INSERT [dbo].[Category] ([Id], [Title] ) VALUES (2, N'גבינות')
INSERT [dbo].[Category] ([Id], [Title] ) VALUES (3, N'ירקות ופירות')
INSERT [dbo].[Category] ([Id], [Title] ) VALUES (4, N'מבשר ודגים')
INSERT [dbo].[Category] ([Id], [Title] ) VALUES (5, N'מאפיםן')
SET IDENTITY_INSERT [dbo].[Category] OFF
GO
