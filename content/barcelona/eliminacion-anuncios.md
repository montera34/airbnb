---
title: "¿Se eliminaron más anuncios de AirBnB desde el pacto entre la plataforma y el ayuntamiento de Mayo de 2018?"
menuTitle: "El informe"
date : 2018-10-09T11:01:11+02:00
weight: 3
draft: false
---

Nota: este es uno de los ejericios realizados durante el taller. 
Equipo: Pablo, Pau, Francisco, Victòria.

**En una reunión a finales de mayo de 2018 entre el Ayuntamiento de Barcelona y Airbnb, la empresa se comprometió a retirar 2.577 anuncios de pisos ilegales que había denunciado el Ayuntamiento. Aseguraron que a partir del 1 de junio ya no estarían publicados en su página web. ¿Cumplieron?**

Unas cuantas noticias de referencia:

+ La Vanguardia: [Barcelona y Airbnb se dan una tregua con la retirada de 2.577 anuncios ilegales](https://www.lavanguardia.com/local/barcelona/20180529/443933421052/ayuntamiento-tregua-airbnb-retirada-anuncios-pisos-ilegales.html)
+ RTVE: [Airbnb elimina este verano más de 3.000 pisos turísticos ilegales en Barcelona a petición del Ayuntamiento](http://www.rtve.es/noticias/20180902/airbnb-elimina-este-verano-mas-3000-pisos-turisticos-ilegales-barcelona-peticion-del-ayuntamiento/1790241.shtml)
+ Hostel Sur: [Airbnb dará datos de los anfitriones al Ayuntamiento de Barcelona](https://www.hosteltur.com/128348_airbnb-dara-datos-anfitriones-al-ayuntamiento-barcelona.html)

En el gráfico de numero de anuncios por mes se puede apreciar un descenso fuera de lo habitual entre el mes de mayo y junio de 2018 [pasar a gráfico de barras]. 

{{< figure src="/images/barcelona/linea-numero-anuncios-barcelona-airbnb.png" alt="Número de anuncios de Airbnb (2017-septiembre 2018)" title="Número de anuncios de Airbnb (2017-septiembre 2018)" >}}


## ¿Qué anuncios se eliminan cada mes?

A partir de los anuncios publicados en Airbnb (llamados _listings_ en la terminología de Airbnb), disponibles en las diferentes bases de datos de los _scrapings_ de InsideAirbnb, hemos comparado mes a mes el número de anuncios nuevos y el de eliminados. Comparamos mediante el identificador único (id) si un anuncio que aparece en un determinado mes está diponible en el siguiente o se ha elminado. 

Mediante un script de Python se ha calculado cuántos nuevos/eliminados anuncios hay respecto el mes anterior desde enero de 2017 a septiembre de 2018. Generamos un histograma para poner en contexto si realmente en junio de 2018 se eliminan más pisos que en los otros meses.

{{< figure src="/images/barcelona/barras-eliminacion-anuncios-mes-barcelona-airbnb.png" alt="Anuncios añadidos y borrados cada mes con respecto al mes anterior" title="Anuncios añadidos y borrados cada mes con respecto al mes anterior" >}}

 
Podemos entonces **responder a la pregunta inicial: Sí, se eliminaron anuncios**. Pero... ¿cuales eran esos anuncios? ¿qué está pasando aproximadamente cada mes con los anuncios de Airbnb en Barcelona?

Si analizamos quién gestiona esos anuncios eliminados (de mayo a junio de 2018) vemos que existe una relación 40% [revisar porcentaje] de anuncios de _hosts_ que tienen uno solo y 60% de multigestores.

{{< figure src="/images/barcelona/anuncios-borrados-junio2018-por-tipo-de-host.png" alt="Número de anuncios borrados en junio de 2018 según tipo de host en junio 2018" title="Número de anuncios borrados en junio de 2018 según tipo de host en junio 2018" >}}
 
Ahora analizamos el balance mensual, la diferencia entre anuncios nuevos y anuncios eliminados de cada mes respecto el mes anterior. [mantener el orden 2017-2018 en eje vertical] Podemos ver el fuerte descenso de más de 1.500 en junio de 2018 (se eliminaron en torno a 3.500, pero se crearon unos 2.000 durante ese periodo) a la vez que un aumento cercano a 1.500 dos meses después, en agosto de 2018.

{{< figure src="/images/barcelona/barras-balance-anuncios-mes-barcelona-airbnb.png" alt="Balance de anuncios respecto mes anterior" title="Balance de anuncios respecto mes anterior" >}}

Calculamos el porcentaje para comprobar la estacionalidad de los anuncios creados y eliminados. Comprobamos por ejemplo que el 37% de los pisos anunciados por primera vez en agosto de 2017 se borraron, ya no estaban dispnibles, un mes después. [comprobar si es esa cifra, parece que el script habla d eagosto 2017).

Con los datos de la diferencia vemos mediante el comportamiento de cuantos pisos existen mes a mes en Airbnb desde 2017 hasta septiembre 2018. Hay un pico que marca un mínimo en el mes de junio.

### Para seguir investigando

¿Cómo se comporta la eliminación de anuncios a lo largo del tiempo? 

¿Es la misma tipología de apartamentos? ¿Son multipropietarios los que desaparecen? 

Para la visualización de datos geográficos se usa Qgis con el plugin “qgis2web”.

[insertar iframe o imagen al mapa].

## Datos usados

+ [Listings mensuales de anuncios en AirBnb de Barcelona](https://github.com/montera34/airbnb.barcelona/tree/master/data/original/airbnb) scrapeados por InsideAirbnb. Se han redondeado las fechas de los scraping a cada uno de los meses.
+ Contorno de barrios Barcelona: [barrios_geo.json](https://github.com/montera34/airbnb.barcelona/blob/master/data/original/contornos/barrios_geo.json)
+ [Tile Map Service (TMS)](https://geogeek.xyz/how-to-add-google-maps-layers-in-qgis-3.html): Google Satellite Hybrid: https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}

## Scripts de análisis desarrollados

Los scripts desarrollados en Python analizan la situación y generan visualiaciones. En concreto, compararn mes a mes para ver cuantos anuncios aparecen y desaparecen. Primero hemos contado cuantas IDs de anuncios coinciden en meses consecutivos y con ello hemos generado tablas para cada grupo de anuncios eliminados y nuevos por mes. Están disponibles en el repositorio del taller: https://github.com/montera34/airbnb.barcelona/blob/master/taller/mango/airbnb.ipynb

## Análisis espacial

+ Integración de los archivos csv de “borrados” y “añadidos” relativos al agosto de 2017 y con respecto al mes anterior (previamente procesados en Python) en Quantum GIS y conversación / exportación para formato shapefile en el sistema de Coordenadas WGS84 (EPSG: 4326).
+ Recuento de puntos (borrados y añadidos ) en polígonos a nivel de los barrios de barcelona (herramienta “Count Points in Polygons”). La operación se ejecutó dos veces para cada capa de puntos. 
+ Representación de los mapas de las cuentas “borrados” y “añadidos ” en mapas de coropletas con clasificación en Quantis.
+ Creación del webmap con recurso al template Leaflet con el plugin "qgis2web" asignando la representación de clúster dinámico para las shapefiles de puntos relativas a “borrados” y “añadidos ”.
+ Se crea automáticamente una carpeta con los archivos relativos a la webapp (disponibles en Google Drive del Taller -https://drive.google.com/drive/folders/1RsmxBuZtkelCmqH8CJqVB81zVZnans2d?usp=sharing y en Git de Montera34 - https://github.com/montera34/airbnb.barcelona/tree/master/taller/mango/qgis2web).

## Resultados

+ Tablas de total de anuncios, de anuncios eliminados y de anuncios nuevos por mes: https://github.com/montera34/airbnb.barcelona/tree/master/taller/mango/data 

## Preguntas a explorar 

+ Comprobar si la eliminación de anuncios de junio se resuelve entrando de los nuevos anuncios en septiembre.
+ Aún más, se podría pensar en que existen alojamientos legales que perduran en el tiempo y alojamiento ilegales que se crean y se destruyen cada mes explicando las variaciones mensuales. Estudiar si son anuncios con licencia publicada o si tienen actividad (número de reviews distinto de cero).


