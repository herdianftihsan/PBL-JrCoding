const data = [
    {
        email:"admin@gmail.com",
        password:"admin123",
        role:"admin"
    },
    {
        email:"user@gmail.com",
        password:"user123",
        role:"user"
    }
]

function login(event){
    event.preventDefault()
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    
    const user = data.find(acc => acc.email === email && acc.password === password)
    console.log(user);
    
   if (!user) {
    alert("Email Atau Password Salah")
   }
   

   if (user.role === "admin") {
    window.location.href = "../../admin/index.html"
   } else if(user.role === "user"){
    window.location.href = "../../user/index.html"
   }
}

function toggleSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("sidebar-open");
}

const links = document.querySelectorAll('.nav-link');
const current = window.location.pathname.split('/').pop();

links.forEach(link => {
    if (link.getAttribute('href') === current) {
        link.classList.add('active');
    }
});

const claim = document.querySelectorAll('.claim');

claim.forEach(btn=>{
    btn.addEventListener('click',function (){
        const course = this.getAttribute('data-course');
        const today = new Date();

        const option = {
            day:'numeric',
            month:'long',
            year:'numeric',
        }

        const formatDate =  today.toLocaleDateString("id-ID",option)
        document.getElementById('tanggal').textContent = formatDate;
        document.getElementById('courseName').textContent = course;
    })
})


function openDeleteModal() { 

    var deleteModal = new bootstrap.Modal(document.getElementById('deleteModal'));
    deleteModal.show();
    document.getElementById("openDeleteModalBtn").addEventListener("click", function () {
        alert("Berhasil dihapus!"); 
        deleteModal.hide()
    });
}
