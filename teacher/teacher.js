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

/* ข้อมูลนักเรียน */
const studentsData = [
    { name: "สมชาย", status: "มา" },
    { name: "สมหญิง", status: "มา" },
    { name: "วิชัย", status: "ขาด" },
    { name: "นิด", status: "สาย" }
];

/* ข้อมูลครู */
const teacherData = {
    name: "ดร.คชา โกศิลา",
    phone: "081-234-5678",
    email: "kacha@udvc.ac.th",
    subject: "Database Network",
    room: "อาคาร IT ห้อง 841",
    bio: "ผู้เชี่ยวชาญด้าน ระบบเครือข่ายและฐานข้อมูล"
};

/* Render pages */
attendance.innerHTML = `
<div class="card">
<h3>เช็คชื่อ</h3>
<table>
<tr><th>ชื่อ</th><th>สถานะ</th></tr>
${studentsData.map(s => `
<tr>
<td>${s.name}</td>
<td>
<select onchange="updateStatus('${s.name}', this.value)">
<option ${s.status === 'มา' ? 'selected' : ''}>มา</option>
<option ${s.status === 'ขาด' ? 'selected' : ''}>ขาด</option>
<option ${s.status === 'ลา' ? 'selected' : ''}>ลา</option>
<option ${s.status === 'สาย' ? 'selected' : ''}>สาย</option>
</select>
</td>
</tr>`).join("")}
</table>
</div>`;

schedule.innerHTML = `
<div class="card">
<h3>ตารางสอน</h3>
<ul>
<li>Web Programming – จันทร์ 9:00-12:00</li>
<li>Database – พุธ 13:00-16:00</li>
</ul>
</div>`;

profile.innerHTML = `
<div class="card">
<h3>โปรไฟล์</h3>
<p><strong>ชื่อ:</strong> ${teacherData.name}</p>
<p><strong>เบอร์โทร:</strong> ${teacherData.phone}</p>
<p><strong>Email:</strong> ${teacherData.email}</p>
<p><strong>วิชา:</strong> ${teacherData.subject}</p>
<p><strong>ห้อง:</strong> ${teacherData.room}</p>
<p><strong>ประวัติ:</strong> ${teacherData.bio}</p>
</div>`;

/* Update status */
function updateStatus(name, status) {
    const student = studentsData.find(s => s.name === name);
    if (student) student.status = status;
    // In real app, save to server
}

/* default */
document.getElementById("attendance").style.display = "block";