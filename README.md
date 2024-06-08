# Unix Socket Client

Cara ini saya buat terinspirasi ketika saya mendapatkan **teknikal test** dari perusahaan singapura, yang dimana nama productnya itu **[proxycurl](https://nubela.co/proxycurl)** by `Nubela Pte ltd`, yang dimana cara ini itu sama persis seperti apa yang saya kerjakan ketika saya melakukan teknikal test. Jika anda tertarik ingin menggunakan cara ini sebagai acuan dari **teknikal test** untuk interviewer calon karyawan baru sebelum ketahap user interview, anda bisa membuat soal dengan versi anda sendiri.

## Example Question
```js
	{
		id: 1,
		question:
			"Buatlah sebuah fungsi dengan nama 'removeVowels(obj)' dengan nama parameter nya itu 'obj' dan input type value nya adalah 'object', yang dimana fungsi tersebut bisa menghapus sebuah nilai yang mengandung huruf vowels dari setiap input yang diberikan dan ouputnya harus sesuai dengan yang diberikan dari soal berikut ini.",
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