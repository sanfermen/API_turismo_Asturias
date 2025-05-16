USE asturias;

-- Museo de la Escuela Rural de Asturias
UPDATE museum
SET image = 'https://res.cloudinary.com/dpz1cfyyy/image/upload/w_800,q_auto/v1746966899/escuela_rural_vlmcwr.jpg'
WHERE museum_id = 1;

-- Museo de la Siderurgia de Asturias (MUSI)
UPDATE museum
SET image = 'https://res.cloudinary.com/dpz1cfyyy/image/upload/w_800,q_auto/v1746966941/musi_vclrng.jpg'
WHERE museum_id = 2;

-- Centro de Interpretación de la Cueva de la Peña
UPDATE museum
SET image = 'https://res.cloudinary.com/dpz1cfyyy/image/upload/w_800,q_auto/v1746967042/cavernacandamo3_zwp4az.jpg'
WHERE museum_id = 3;

-- Centro de Interpretación de la Ría del Nalón - Puerta del Mar
UPDATE museum
SET image = 'https://res.cloudinary.com/dpz1cfyyy/image/upload/w_800,q_auto/v1746967042/InterpretacionNalon1_ia8dcd.jpg'
WHERE museum_id = 4;


