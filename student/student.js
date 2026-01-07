function logout() {
    localStorage.clear();
    location.href = "login.html";
}

function show(id) {
    document.querySelectorAll(".page").forEach(p => p.style.display = "none");
    document.getElementById(id).style.display = "block";

    document.querySelectorAll(".sidebar button")
        .forEach(b => b.classList.remove("active"));

    event.target.classList.add("active");
}

/* ข้อมูลครู */
const teachersData = [
    {
        name: "ดร.คชา โกศิลา",
        phone: "081-234-5678",
        email: "kacha@udvc.ac.th",
        subject: "Database Network",
        room: "อาคาร IT ห้อง 841",
        bio: "ผู้เชี่ยวชาญด้าน ระบบเครือข่ายและฐานข้อมูล "
    },
    {
        name: "อ.ภานุเมศ ชุมภูนนท์",
        phone: "089-987-6543",
        email: "oh999@university.ac.th",
        subject: "Database System",
        room: "อาคาร IT ห้อง 305",
        bio: "เชี่ยวชาญด้านฐานข้อมูลและ Big Data"
    }
];

/* Render pages */
schedule.innerHTML = `
<div class="card">
<h3>ตารางเรียน</h3>
<ul>
<li>Web Programming – จันทร์</li>
<li>Database – พุธ</li>
</ul>
</div>`;

teachers.innerHTML = `
<div class="card">
<h3>ครูผู้สอน</h3>
${teachersData.map((t,i)=>`
<div class="teacher-item" onclick="openTeacher(${i})">
<strong>${t.name}</strong><br>
<span>${t.subject}</span>
</div>`).join("")}
</div>`;

attendance.innerHTML = `
<div class="card">
<h3>ประวัติการมาเรียน</h3>
<p>มา 20 | ขาด 1 | สาย 2</p>
</div>`;

grades.innerHTML = `
<div class="card">
<h3>เกรด</h3>
<p>Web Programming: A</p>
<p>Database: B+</p>
</div>`;

/* Popup logic */
function openTeacher(i) {
    const t = teachersData[i];
    tName.innerText = t.name;
    tSubject.innerText = t.subject;
    tPhone.innerText = t.phone;
    tEmail.innerText = t.email;
    tRoom.innerText = t.room;
    tBio.innerText = t.bio;
    teacherModal.style.display = "flex";
}

function closeTeacher() {
    teacherModal.style.display = "none";
}

/* default */
document.getElementById("schedule").style.display = "block";
