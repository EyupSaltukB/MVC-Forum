# React + Vite

MVC mimarisi kullanarak bir forum projesi oluşturdum.


# Kütüphanelerim
- react-router-dom
- json-server
- axios
- sass
- uuid

# Ekran Görüntüleri

![](./src/assets/images/mvc1.png)
![](./src/assets/images/mvc2.png)
![](./src/assets/images/mvc3.png)

# Video

![](./src/assets/images/mvc.mp4)

# GIF

![](./src/assets/images/mvc.gif)


# MVC -> Model View Controller
- MVC Yapısı Nedir ?

* Model: 
- Veri yapısını kontrol eder.

* View: 
- Kullanıcı arayüzünü temsil eder.
- JSX kodları bu dosyada yazılır.

* Controller: 
- Model ve View arasındaki iletişimi kurar.
- Kullanıcı etkileşimde kullanılacak 
fonksiyonlar ve API istekleri burada yazılır.


# Yol Haritası
- API üzerinden blog verileri al - (Controller ile)

- Her blog elemanı için kart oluştur - (View ile)

- Bir Form Arayüzü oluştur (View)

- Formdaki inputlar her değiştiğinde stateleriini tut (Controller)

- State üstünde tutulacakk değerleri belirle (Model)

- Gönder Butonuna basıldığında postu apiye gönder ve kullnaıcıyı yöndeldir (Controller)