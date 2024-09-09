import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js'
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  updateDoc,
  query,
  orderBy
  } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js'

const firebaseConfig = {
  apiKey: "AIzaSyBoQovSZfN-IWxwE6SNigeVFl7EyoGo6I8",
  authDomain: "insan-cemerlang-bf3bc.firebaseapp.com",
  projectId: "insan-cemerlang-bf3bc",
  storageBucket: "insan-cemerlang-bf3bc.appspot.com",
  messagingSenderId: "97027282334",
  appId: "1:97027282334:web:f8b63d43a947098d3df28f",
  measurementId: "G-TJFSY9D8R1"
};

// inisialisasi firebase
const aplikasi = initializeApp(firebaseConfig)
const basisdata = getFirestore(aplikasi)

export async function ambilDaftarSiswa() {
  const refDoKumen = collection(basisdata, "Siswa");
  const kueri = query(refDoKumen, orderBy("Nama"));
  const cuplikankueri = await getDocs(kueri);
  
  let hasilkueri = [];
  cuplikankueri.forEach((dokumen) => {
    hasilkueri.push({
      id: dokumen.id,
      Nama: dokumen.data().Nama,
      Alamat: dokumen.data().Alamat
    })
  })
  
  return hasilkueri;
}

export async function tambahSiswa(nama,alamat) {
  try {
    // menyimpan data ke firebase
    const refDoKumen = await addDoc(collection(basisdata, "Siswa"),{
      nama: nama,
      alamat: alamat 
    })
    
    //menampilkan pesan berhasil 
    Console.log("berhasil menyimpan data siswa")
  } catch (error) {
     // menampilkan pesan gagal
     Console.log("gagal menyimpan data siswa")
  
  }
}