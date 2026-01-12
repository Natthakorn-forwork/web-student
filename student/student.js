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

/* ข้อมูลนักเรียน */
const studentData = {
    name: "สมชาย ใจดี",
    id: "12345",
    email: "somchai@student.ac.th",
    phone: "081-111-2222",
    major: "Computer Science"
};

/* ข้อมูลการมาเรียน */
const attendanceData = { total: 23, present: 20, absent: 1, late: 2 };

/* Render pages */
schedule.innerHTML = `
<div class="card">
<h3>ตารางเรียน</h3>
<table>
<tr><th>วัน</th><th>เวลา</th><th>วิชา</th><th>ห้อง</th></tr>
<tr><td>จันทร์</td><td>9:00-12:00</td><td>Big data</td><td>IT841</td></tr>
<tr><td>พุธ</td><td>13:00-16:00</td><td>Database</td><td>IT841</td></tr>
</table>
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
<p>รวม ${attendanceData.total} วัน</p>
<p>มา: ${attendanceData.present} วัน (${(attendanceData.present / attendanceData.total * 100).toFixed(1)}%)</p>
<div class="progress-bar"><div style="width: ${(attendanceData.present / attendanceData.total * 100).toFixed(1)}%"></div></div>
<p>ขาด: ${attendanceData.absent} วัน (${(attendanceData.absent / attendanceData.total * 100).toFixed(1)}%)</p>
<p>สาย: ${attendanceData.late} วัน (${(attendanceData.late / attendanceData.total * 100).toFixed(1)}%)</p>
</div>`;

grades.innerHTML = `
<div class="card">
<h3>เกรด</h3>
<p>Web Programming: A</p>
<p>Database: B+</p>
</div>`;

profile.innerHTML = `
<div class="card">
<h3>โปรไฟล์นักเรียน</h3>
<p><strong>ชื่อ:</strong> ${studentData.name}</p>
<p><strong>รหัสนักศึกษา:</strong> ${studentData.id}</p>
<p><strong>Email:</strong> ${studentData.email}</p>
<p><strong>เบอร์โทร:</strong> ${studentData.phone}</p>
<p><strong>สาขา:</strong> ${studentData.major}</p>
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
