let btnTambah = document.getElementById('btn-tambah');
let taskList = document.getElementById('task-list');

btnTambah.onclick = (e) => {
   let input = document.getElementById('assignment');
   let title = input.value.trim();
   if (title == "") {
      alert("Inputan masih kosong");
      return;
   }

   // Membuat elemen tugas baru
   let task = document.createElement("div");
   task.id = `${Date.now()}`;
   task.className = `flex justify-between items-center p-2 border border-gray-200 rounded-lg bg-gray-50 shadow-sm`;
   
   task.innerHTML = `
         <p class="text-gray-800">${title}</p>
         <div class="flex space-x-2">
            <input type="button" id="btn-selesai" value="SELESAI" data-task="${task.id}"
                   class="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition-colors cursor-pointer">
            <input type="button" id="btn-hapus" value="HAPUS" data-task="${task.id}"
                   class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors cursor-pointer">
         </div>
   `;
   
   // Menambahkan elemen tugas ke daftar
   taskList.appendChild(task);
   input.value = ""; // Mengosongkan input setelah menambah tugas
   e.preventDefault();
}
