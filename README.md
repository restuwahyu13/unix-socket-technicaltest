# Unix Socket Client

Cara ini saya buat terinspirasi ketika saya mendapatkan teknikal test dari perusahaan singapura, yang dimana nama productnya itu `p**x**u*l` by `N*b*l*`, yang dimana caranya ini itu sama persis seperti apa yang saya kerjakan waktu itu ketika saya megerjakan teknikal test. Jika anda tertarik ingin menggunakan cara ini sebagai acuan dari teknikal test untuk interviewer calon karyawan baru tahap awal sebelum ketahap user interview, anda bisa membuat soal - soal dengan versi anda sendiri, menggunakan konsep seperti ini, untuk example server code nya bisa cek di branch `server`.

## Concept Technical Test

- Dari sisi perusahaan hanya akan menyediakan sebuah `docker image` dan 1 pertanyaan tertulis seperti contoh dibawah, yang dimana untuk docker image tersebut sudah bundle dengan code + petanyaan selajutnya yang perlu dijawab oleh si `calon kandidat`, jadi docker image yang di buat dari sisi perusahaan yang akan mengirim request ke sisi server, yang nanti akan di buat oleh si `calon kandidat`.

- Dari sisi kandidat perlu membuat unix server yang di bundle menjadi `docker image,` yang dimana fungsinya untuk menghandle setiap requst yang dikirim dari `docker image` yang dibuat oleh perusahaan, jika setiap request yang dikirim dari `docker image` perusahaan itu sukses, maka nanti akan muncul pertanyaan berikutnya dari sisi `docker images` perusahaan `(unix client)`, jika anda penasaran silahkan coba amati konsepnya dari repo ini.

## Example Question
```js
 {
  id: 1,
  question: "Buatlah sebuah fungsi dengan nama 'removeVowels(str)' dengan nama parameter nya itu 'str' dan input type value nya adalah 'string', yang dimana fungsi tersebut bisa menghapus sebuah nilai yang mengandung huruf vowels dari setiap input yang diberikan dan ouputnya harus sesuai dengan yang diberikan dari soal berikut ini.",
  type: 'remove string',
  input: "restu wahyu saputra",
  output: 'rstwhysptr'
 }
```

## Command

- ### Server
  ```sh
  docker run --rm -v .:/var/run --network=none 705471/unixserver-techtest node .
  ```

- ### Client
  ```sh
  docker run --rm -v .:/var/run --network=none 705471/unixclient-techtest node . --socketPath='/var/run/technicaltest.sock' --questionId=1 --input='restu wahyu saputra'
  ```

## Screenshots

- #### Soal Benar
   Berikut ini adalah gambar dimana ketika kita berhasil menyelesai soal dari `teknikal test` sebelumnya contoh soal ke 1, maka nanti akan tampil soal selanjutnya contoh soal ke 2, begitu juga seterus nya sampai semua soal selesai seperti contoh gambar berikut nya.

  ![](https://i.imgur.com/SOFh5GN.png)

- #### Soal Selesai
  Berikut ini adalah gambar dimana ketika kita sudah berhasil menyelesai semua soal dari `teknikal test` yang diberikan.

  ![](https://i.imgur.com/bK3yO9S.png)

## Tips

- Buatlah soal - soal yang relate dengan rekruitment yang dibutuhkan untuk calon kandidat baru

- Buatlah soal - soal yang relate sama product yang kita miliki, contoh saya di `fintech`, jika saya as user saya akan memberikan berupa home test, yang menggunakan bahasa pemerograman yang relate digunakan di tempat saya berkerja, contoh misalkan buat simulasi `withdraw, deposit atau transfer` untuk payment gateway nya bisa menggunakan apa saja selama itu bisa sanbox mode.

- Untuk `questions` saran saya datanya kalau bisa langsung ambil dari `database` untuk list `question` nya, dikarenakan untuk memudahkan melakukan pembaharuan soalnya, anda bisa menggunakan provider database gratis seperti [clever cloud](https://www.clever-cloud.com/) atau yang lainnya.

# Reason Not Use Provider Coding Test

- Kenapa alasan saya membuat ini karena artikel [berikut ini](https://medium.com/@miladhi/code-challenge-the-most-efficient-way-to-lose-talents-5d66d140ba0c) sama dengan opinion saya, setiap soal - soal di `hankerrank` atau `leetcode` dan sebagainya, itu ada yang bisa dimanipulasi untuk jawabannya apalagi sekarang dengan mudahnya menggunakan `AI`, walapun nanti katakanlah ada beberapa layanan `(coding test)` yang tidak bisa melakukan copy paste soal, karena saya pernah temui yang seperti ini ada beberapa layanan yang tidak bisa melakukan hal seperti ini, ngakalin nya caranya sangat mudah jika kita tidak bisa mengcopy soal tersebut cukup gunakan inspect element dan boom soalnya bisa kita copy paste ke `Chat GTP` dan jawaban langsung dibuat.

- Cara manipulasi selanjutnya cukup copy tujuan dari soalnya dan kemudian copy paste ke google, nanti akan keluar semua referensi dari code yang dimaksud terkait tujuan soalnya, walapun nanti yang keluar ada beberapa `bahasa programming` yang tidak kita kuasai, katakanlah yang kita kuasai itu tidak ada contoh code nya semisalkan `javascript`, tetapi ada jawaban nya menggunakan `python`, kita tinggal cukup copas saja code `python` tersebut dengan tools seperti [codeconvert](https://www.codeconvert.ai/), dengan memilih source `python` to `javascript`, dan boom jabawan yang kita inginkan sudah tersedia.

# If Me user

Jika saya sebagai as user yang ingin merekrut calon kandidat baru, maka saya akan melakukan hal seperti ini untuk mengetes calon kandidat baru.

- Test awal saya akan berikan soal - soal yang relate sama product yang kita miliki contoh saya di `fintech`, maka saya nanti akan memberikan berupa teknikal home test dengan durasi katakanlah 4 hari sampai 1 minggu, yang dimana untuk bahasa pemerograman yang digunakan harus sama dengan yang digunakan di tempat berkerja saya saat ini semisalnya `golang`, maka nanti project yang saya berikan itu contoh buatlah simulasi simple pembayaran seperti `withdraw dan deposit` berikut juga dengan cara menghandle callback nya, untuk payment gateway nya bisa menggunakan apa saja selama itu bisa sanbox mode.


- Jika si interviewer lolos, maka test berikutnya tahap 1, saya akan menanyakan dulu terkait fundamental programming yang digunakan dan tools - tools apa saja yang diagunakan dan bebera pattern lainnya yang relate digunakan saat ini, bukan yang exists ya tapi yan digunakan di perusahaan saya saat ini, berikut juga dengan pekerjaan mereka sehari - hari di perusahaan sebelumnya.


- Test berikutnya tahap 2, saya akan menyuruh si calon kandidat untuk menjelaskan setiap coding yang dia tulis dari awal sampai akhir, terkait flow proses nya, jika dia memiliki pengalaman kerja saya akan tambah dengan sistem design dan database nya wajib live coding, dari soal yang sebelumnya yang sudah dia kerjakan, saya akan berikut waktu max 2 jam dan min 1 jam.


- Test berikutnya tahap 3, saya akan tanyakan terkait external tools yang digunakan di perusahaan saya saat ini gunakan misalnya contoh `RabbitMQ`, jika si calon kandidat tidak pernah menggunakan jangan di paksakan untuk di tanya, kecuali si calon kandidat pernah menggunakannya.
