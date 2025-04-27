USE asturias;

INSERT INTO museum (name, image, latitude, longitude, web, information, free, address, council_id)
VALUES
('Museo de la Escuela Rural de Asturias', 'ejemplo.jpg', 43.427449,-5.42417, 'http://www.museodelaescuelarural.com/museo-de-la-escuela-rural/museo-de-la-escuela-rural/portada_4_1_ap.html', 'En esta antigua escuela, construida en 1908, el visitante se verá inmerso en una atmósfera que le transportará a otro tiempo', 0, 'Carretera AS-255, km 7.5. 33310 Viñón', 9),
('Museo de la Siderurgia de Asturias (MUSI)', 'ejemplo.jpg', 43.308876,-5.687857, 'https://www.ayto-langreo.es/web/musi', 'Una impresionante torre de refrigeración de la antigua fábrica siderúrgica de la empresa Duro Felguera alberga el Museo de la Siderurgia de Asturias', 0, 'C/ Hornos Altos (Ciudad Industrial Valnalón). 33930 La Felguera', 31),
('Centro de Interpretación de la Cueva de la Peña', 'ejemplo.jpg', 43.450294,-6.073628,'https://candamoturismo.es/la-cueva', 'La mejor interpretación del arte rupestre', 0,'Palacio Valdés-Bazán. 33828 San Román', 10),
('Centro de Interpretación de la Ría del Nalón - Puerta del Mar', 'ejemplo.jpg', 43.556963,-6.076272, NULL, 'La exposición permanente del Centro de Interpretación Puerta del Mar, recrea la historia de la industria de la pesca de la angula y las vidas de las carboneras', 1, 'Edificio Puerta del Mar. 33125 L"Arena', 69);