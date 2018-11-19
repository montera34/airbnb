---
title: "Los datos"
date: 2018-07-13T09:57:44+02:00
weight: 2
draft: false
---

Este informe esta basado en diferentes bases de datos para ayudar a entender el tema de las viviendas turísticas en Donostia - San Sebastián. Las bases de datos oficiales provienen del Ayuntamiento de Donostia y del Instituto Nacional de Estadística. Para los datos de Airbnb, que no están disponibles para descarga, se ha recurrido a diversas fuentes que capturan datos con diferentes técnicas de [web-scraping](https://es.wikipedia.org/wiki/Web_scraping). Se usan también datos del portal inmobiliario Idealista para analizar la oferta de alquiler residencial no turístico.

## Datos de Airbnb

Para este informe se han usado datos de la plataforma [Data Hippo](https://datahippo.org). Para anteriores versiones de este informe hemos desarrollado los análisis en base a los datos de la web [InsideAirbnb](http://insideairbnb.com).

{{% figure src="/images/datahippo.imago.png" alt="Datahippo. Proyecto colaborativo para ofrecer datos de diferentes plataformas de alquiler turístico" title="DataHippo. Proyecto colaborativo para ofrecer datos de diferentes plataformas de alquiler turístico" link="https://datahippo.org" caption="Pincha en la imagen para visitar la plataforma DataHippo." %}}

**DataHippo es un proyecto colaborativo para ofrecer datos de diferentes plataformas de alquiler turístico, como Airbnb o HomeAway y obtiene los datos con diferentes técnicas de [web-scraping](https://es.wikipedia.org/wiki/Web_scraping), compartiéndolos en abierto, con el objetivo de facilitar el análisis y debate sobre este fenómeno. El proyecto nace en el verano de 2017 en Donostia, en el SummerLab organizado por Hirikilabs y Tabakalera y como iniciativa de Montera34 y [Santiago Espinosa](http://saigesp.es).

Los datos de Airbnb de 2017 provienen de InsideAirbnb. 

## Datos oficiales de Viviendas de uso turístico (VUT)

Usamos para el análisis los datos del [censo de viviendas turísticas del Ayuntamiento de Donostia](https://www.donostia.eus/ataria/es/web/hirigintza/censo-de-viviendas-turisticas), que se han descargado de la propia web ([ver método](https://wiki.montera34.com/airbnb/pregunta/analisis-vut-ordenanza-donostia)).

VUT registradas en el censo municipal de Donostia, tras la aplicación de la ordenanza de viviendas turísticas de marzo de 2018.

|Fecha 		|    Abril 2018	|    Sept. 2018	|
|---------------|--------------:|--------------:|
|Habitaciones	| 125		| 126		|
|Viviendas	| 1.117		| 1.163		|
|Total		| 1.242		| 1.289		|
Fuente: Ayuntamiento de Donostia

## Acceso a los datos

Todos los datos usados están disponibles para su descarga en el repositorio del proyecto, en [formato original](https://github.com/montera34/airbnbeuskadi/tree/master/data/original) y también [tratados y estructurados](https://github.com/montera34/airbnbeuskadi/tree/master/data/output) para la realización del informe.

En cada una de las secciones del informe se indican los datos usados para elaborar cada uno de los análisis.


