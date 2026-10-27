const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];

const translations = {
  ar: {
    demo:"بيئة تجريبية", dashboard:"الرئيسية", tasks:"المهام", patients:"المرضى", shifts:"المناوبات", handover:"تسليم المناوبة", messages:"الرسائل", needHelp:"هل تحتاج إلى مساعدة؟", supportText:"هذا نموذج أولي لمشروع التخرج.", aboutProject:"عن المشروع ←", nurse:"ممرضة", workspace:"مساحة العمل", searchPlaceholder:"ابحث عن مريض أو مهمة...", goodMorning:"صباح الخير", welcome:"أهلًا بكِ، أمينة", welcomeSub:"إليكِ ملخص عملكِ وما يحتاج إلى انتباهكِ اليوم.", addTask:"إضافة مهمة", demoNoticeTitle:"بيانات تجريبية", demoNotice:"الأسماء والقياسات المعروضة افتراضية للتجربة وليست بيانات مرضى حقيقية.", assignedPatients:"المرضى المسؤول عنهم", inYourCare:"ضمن رعايتكِ", todayTasks:"مهام اليوم", tasksAssigned:"مهام مسندة", completed:"مهام مكتملة", greatWork:"عمل رائع اليوم", upcoming:"مهام قادمة", needAttention:"تحتاج إلى المتابعة", priorityTasks:"المهام ذات الأولوية", prioritySub:"تابعي المهام المسندة إليكِ خلال المناوبة.", viewAll:"عرض الكل ←", currentShift:"المناوبة الحالية", shiftSub:"الثلاثاء، 27 أكتوبر 2026", inProgress:"جارية", shiftStart:"بداية المناوبة", shiftEnd:"نهاية المناوبة", shiftProgress:"تقدم المناوبة", teamOnDuty:"الفريق المناوب", nursesOnShift:"4 ممرضين في القسم", patientOverview:"نظرة عامة على المرضى", patientSub:"آخر المرضى الذين تمت متابعتهم.", patient:"المريض", room:"الغرفة", lastVitals:"آخر قياس", status:"الحالة", handoverTitle:"تسليم المناوبة", handoverSub:"لا تتركي مهمة دون توثيق.", handoverReady:"هل أنتِ مستعدة للتسليم؟", handoverDesc:"راجعي المهام غير المكتملة وأضيفي ملاحظات للفريق التالي.", prepareHandover:"تجهيز التسليم", prototypeFooter:"نموذج أولي تعليمي · لا يُستخدم لاتخاذ قرارات طبية", taskName:"اسم المهمة", dueTime:"الوقت المطلوب", priority:"الأولوية", notes:"ملاحظات", cancel:"إلغاء", saveTask:"حفظ المهمة", allTasks:"جميع المهام", allTasksSub:"عرض المهام وتحديث حالتها.", allPatients:"قائمة المرضى", allPatientsSub:"سجلات تجريبية للعرض فقط.", shiftSchedule:"جدول المناوبات", shiftScheduleSub:"مواعيد المناوبات للفريق.", handoverPageTitle:"سجل تسليم المناوبة", handoverPageSub:"وثّقي المهام المفتوحة والملاحظات المهمة للفريق التالي.", messagesTitle:"التواصل بين الفريق", messagesSub:"نموذج واجهة للمحادثات الداخلية.", patientStable:"مستقر", patientFollow:"متابعة", patientReview:"يحتاج مراجعة", pending:"قيد الانتظار", done:"مكتملة", high:"عالية", normal:"عادية", low:"منخفضة", noTasks:"لا توجد مهام مطابقة.", newTask:"إضافة مهمة جديدة", taskAdded:"تمت إضافة المهمة بنجاح.", taskUpdated:"تم تحديث حالة المهمة.", aboutTitle:"عن NurseFlow", aboutBody:"NurseFlow نموذج أولي تعليمي لإدارة مهام التمريض والمناوبات ومتابعة المرضى. يستخدم بيانات افتراضية ولا يحفظ البيانات على خادم.", logoutMessage:"هذا نموذج تجريبي؛ تسجيل الخروج غير مفعّل.", notifyMessage:"لا توجد إشعارات جديدة في النموذج التجريبي.", chatPlaceholder:"اكتبي رسالة للفريق...", send:"إرسال", sendDemo:"تمت إضافة الرسالة إلى العرض التجريبي.", shiftMorning:"صباحية", shiftEvening:"مسائية", shiftNight:"ليلية", nurseName:"الممرض/ة", department:"القسم", time:"الوقت", taskTime:"الوقت", patientId:"رقم المريض", noNotes:"لا توجد ملاحظات مسجلة.", handoverNotes:"ملاحظات التسليم", saveNotes:"حفظ الملاحظات", notesSaved:"تم حفظ ملاحظات التسليم في هذا العرض التجريبي.", open:"مفتوحة", searchNoResults:"لا توجد نتائج مطابقة."
  },
  en: {
    demo:"Demo environment", dashboard:"Dashboard", tasks:"Tasks", patients:"Patients", shifts:"Shifts", handover:"Shift handover", messages:"Messages", needHelp:"Need a hand?", supportText:"This is a graduation project prototype.", aboutProject:"About project →", nurse:"Nurse", workspace:"Workspace", searchPlaceholder:"Search patients or tasks...", goodMorning:"GOOD MORNING", welcome:"Welcome back, Amina", welcomeSub:"Here’s your work summary and what needs your attention today.", addTask:"Add task", demoNoticeTitle:"Demo data", demoNotice:"Names and measurements are fictional for demonstration and are not real patient data.", assignedPatients:"Assigned patients", inYourCare:"In your care", todayTasks:"Today's tasks", tasksAssigned:"Assigned tasks", completed:"Completed tasks", greatWork:"Great work today", upcoming:"Upcoming tasks", needAttention:"Need follow-up", priorityTasks:"Priority tasks", prioritySub:"Track your assigned tasks during this shift.", viewAll:"View all →", currentShift:"Current shift", shiftSub:"Tuesday, October 27, 2026", inProgress:"In progress", shiftStart:"Shift starts", shiftEnd:"Shift ends", shiftProgress:"Shift progress", teamOnDuty:"Team on duty", nursesOnShift:"4 nurses in the unit", patientOverview:"Patient overview", patientSub:"Recently monitored patients.", patient:"Patient", room:"Room", lastVitals:"Last vitals", status:"Status", handoverTitle:"Shift handover", handoverSub:"Leave no task undocumented.", handoverReady:"Ready for handover?", handoverDesc:"Review open tasks and add notes for the next team.", prepareHandover:"Prepare handover", prototypeFooter:"Educational prototype · Not for clinical decisions", taskName:"Task name", dueTime:"Due time", priority:"Priority", notes:"Notes", cancel:"Cancel", saveTask:"Save task", allTasks:"All tasks", allTasksSub:"Review tasks and update their status.", allPatients:"Patient list", allPatientsSub:"Fictional records for demonstration only.", shiftSchedule:"Shift schedule", shiftScheduleSub:"Team shift times.", handoverPageTitle:"Shift handover log", handoverPageSub:"Document open tasks and important notes for the next team.", messagesTitle:"Team communication", messagesSub:"A UI prototype for internal team messages.", patientStable:"Stable", patientFollow:"Follow-up", patientReview:"Needs review", pending:"Pending", done:"Completed", high:"High", normal:"Normal", low:"Low", noTasks:"No matching tasks.", newTask:"Add a new task", taskAdded:"Task added successfully.", taskUpdated:"Task status updated.", aboutTitle:"About NurseFlow", aboutBody:"NurseFlow is an educational prototype for nursing tasks, shifts, and patient follow-up. It uses fictional data and does not save data to a server.", logoutMessage:"Demo mode: sign out is not enabled.", notifyMessage:"No new notifications in this demo.", chatPlaceholder:"Write a message to the team...", send:"Send", sendDemo:"Message added to the demo view.", shiftMorning:"Morning", shiftEvening:"Evening", shiftNight:"Night", nurseName:"Nurse", department:"Department", time:"Time", taskTime:"Time", patientId:"Patient ID", noNotes:"No notes recorded.", handoverNotes:"Handover notes", saveNotes:"Save notes", notesSaved:"Handover notes saved in this demo view.", open:"Open", searchNoResults:"No matching results."
  }
};

let lang = "ar";
let activePage = "dashboard";
let toastTimer;
let tasks = [
  {id:1,title:"قياس العلامات الحيوية",patient:"P-101",time:"08:00",priority:"high",done:false,notes:""},
  {id:2,title:"سحب عينة دم",patient:"P-102",time:"09:00",priority:"high",done:false,notes:""},
  {id:3,title:"تسجيل نتائج المتابعة",patient:"P-103",time:"10:30",priority:"normal",done:true,notes:""},
  {id:4,title:"متابعة مستوى الأكسجين",patient:"P-104",time:"11:00",priority:"normal",done:false,notes:""},
  {id:5,title:"تحديث سجل المريض",patient:"P-101",time:"12:00",priority:"low",done:true,notes:""},
  {id:6,title:"مراجعة قياسات الضغط",patient:"P-102",time:"12:30",priority:"normal",done:true,notes:""},
  {id:7,title:"تجهيز تسليم المناوبة",patient:"P-103",time:"14:00",priority:"high",done:false,notes:""}
];
const patients = [
  {id:"P-101",name:"خالد أحمد",room:"201",vitals:"36.8° · 98%",status:"stable",initials:"خأ"},
  {id:"P-102",name:"سارة محمود",room:"203",vitals:"37.1° · 97%",status:"follow",initials:"سم"},
  {id:"P-103",name:"محمد علي",room:"205",vitals:"36.7° · 99%",status:"stable",initials:"مع"},
  {id:"P-104",name:"ليان عمر",room:"208",vitals:"37.4° · 96%",status:"review",initials:"لع"}
];
let chatMessages = [
  {from:"سارة",text:"تم تحديث سجل المريض P-102.",time:"09:15"},
  {from:"محمد",text:"سأراجع المهام قبل تسليم المناوبة.",time:"09:22"}
];

const pageNames = {
  dashboard:{ar:"الرئيسية",en:"Dashboard"},
  tasks:{ar:"المهام",en:"Tasks"},
  patients:{ar:"المرضى",en:"Patients"},
  shifts:{ar:"المناوبات",en:"Shifts"},
  handover:{ar:"تسليم المناوبة",en:"Shift handover"},
  messages:{ar:"الرسائل",en:"Messages"}
};
function t(key){return translations[lang][key] || translations.ar[key] || key;}
function esc(str){return String(str).replace(/[&<>"']/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function showToast(message){const el=$("#toast");el.textContent=message;el.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove("show"),2700);}
function applyLanguage(){
  document.documentElement.lang=lang;
  document.documentElement.dir=lang==="ar"?"rtl":"ltr";
  document.body.dir=lang==="ar"?"rtl":"ltr";
  $("#langBtn").textContent=lang==="ar"?"EN":"عربي";
  $$("[data-i18n]").forEach(el=>{const key=el.dataset.i18n;if(translations[lang][key])el.textContent=translations[lang][key];});
  $$("[data-i18n-placeholder]").forEach(el=>{const key=el.dataset.i18nPlaceholder;if(translations[lang][key])el.placeholder=translations[lang][key];});
  $("#pageTitle").textContent=pageNames[activePage][lang];
  renderPage();
}
function priorityText(p){return t(p==="high"?"high":p==="low"?"low":"normal");}
function priorityClass(p){return "priority-"+p;}
function taskStatus(task){return task.done?t("done"):t("pending");}
function taskRow(task){
  return `<div class="task-row"><button class="task-check ${task.done?"done":""}" data-toggle-task="${task.id}" aria-label="${task.done?t("done"):t("pending")}">${task.done?"✓":""}</button><div class="task-main"><strong>${esc(task.title)}</strong><div class="task-meta"><span class="patient-id">${esc(task.patient)}</span><span>◷ ${esc(task.time)}</span><span class="priority-tag ${priorityClass(task.priority)}">${priorityText(task.priority)}</span></div></div><span class="task-status">${taskStatus(task)}</span></div>`;
}
function patientStatus(status){return status==="stable"?t("patientStable"):status==="follow"?t("patientFollow"):t("patientReview");}
function patientStatusClass(status){return status==="stable"?"status-stable":status==="follow"?"status-follow":"status-review";}
function patientRow(p){
  return `<tr><td><div class="patient-name"><span class="patient-avatar ${p.status==="follow"?"alt":""}">${esc(p.initials)}</span><span>${esc(p.name)}<br><small style="font-size:9px;color:#98a5ad;font-weight:400">${esc(p.id)}</small></span></div></td><td>${esc(p.room)}</td><td>${esc(p.vitals)}</td><td><span class="status-pill ${patientStatusClass(p.status)}">${patientStatus(p.status)}</span></td></tr>`;
}
function updateStats(){
  const done=tasks.filter(x=>x.done).length, open=tasks.length-done;
  $("#statPatients").textContent=patients.length;
  $("#statTasks").textContent=tasks.length;
  $("#statCompleted").textContent=done;
  $("#statUpcoming").textContent=open;
  $("#taskNavCount").textContent=open;
  $("#completionProgress").style.width=(tasks.length?Math.round(done/tasks.length*100):0)+"%";
}
function renderDashboard(){
  updateStats();
  const query=$("#globalSearch").value.trim().toLowerCase();
  const filtered=tasks.filter(x=>(x.title+" "+x.patient).toLowerCase().includes(query));
  $("#dashboardTasks").innerHTML=filtered.slice(0,4).map(taskRow).join("") || `<div class="empty-state">${t("noTasks")}</div>`;
  $("#dashboardPatients").innerHTML=patients.filter(p=>(p.name+" "+p.id+" "+p.room).toLowerCase().includes(query)).slice(0,4).map(patientRow).join("");
}
function renderTasks(){
  updateStats();
  const query=$("#globalSearch").value.trim().toLowerCase();
  const filtered=tasks.filter(x=>(x.title+" "+x.patient).toLowerCase().includes(query));
  return `<div class="placeholder-heading"><div><h1>${t("allTasks")}</h1><p>${t("allTasksSub")}</p></div><button class="primary-button" id="pageAddTask">＋ ${t("addTask")}</button></div><section class="placeholder-panel"><div class="task-list">${filtered.map(taskRow).join("")||`<div class="empty-state">${t("noTasks")}</div>`}</div></section>`;
}
function renderPatients(){
  const query=$("#globalSearch").value.trim().toLowerCase();
  const filtered=patients.filter(p=>(p.name+" "+p.id+" "+p.room).toLowerCase().includes(query));
  return `<div class="placeholder-heading"><div><h1>${t("allPatients")}</h1><p>${t("allPatientsSub")}</p></div></div><section class="placeholder-panel"><div class="patient-table-wrap"><table><thead><tr><th>${t("patient")}</th><th>${t("room")}</th><th>${t("lastVitals")}</th><th>${t("status")}</th></tr></thead><tbody>${filtered.map(patientRow).join("")}</tbody></table></div></section><p style="color:#95a2ab;font-size:10px;margin-top:12px">ⓘ ${t("demoNotice")}</p>`;
}
function renderShifts(){
  const shifts=[
    ["أمينة محمد","AM","07:00 AM – 03:00 PM","shiftMorning","active"],
    ["سارة أحمد","SA","03:00 PM – 11:00 PM","shiftEvening",""],
    ["محمد خالد","MK","11:00 PM – 07:00 AM","shiftNight",""]
  ];
  return `<div class="placeholder-heading"><div><h1>${t("shiftSchedule")}</h1><p>${t("shiftScheduleSub")}</p></div></div><section class="placeholder-panel"><div class="simple-list">${shifts.map(s=>`<div class="simple-row"><div class="simple-icon">◷</div><div class="simple-text"><strong>${s[0]}</strong><small>${t("nurse")} · ${t(s[3])}</small></div><strong style="font-size:11px;direction:ltr">${s[2]}</strong>${s[4]?`<span class="status-pill status-stable">${t("inProgress")}</span>`:""}</div>`).join("")}</div></section>`;
}
function renderHandover(){
  const openTasks=tasks.filter(x=>!x.done);
  return `<div class="placeholder-heading"><div><h1>${t("handoverPageTitle")}</h1><p>${t("handoverPageSub")}</p></div></div><section class="placeholder-panel"><h3 style="font-size:13px;margin-top:0">${t("open")} (${openTasks.length})</h3><div class="task-list">${openTasks.map(taskRow).join("")||`<div class="empty-state">${t("noTasks")}</div>`}</div><label style="display:grid;gap:7px;margin-top:22px;font-size:11px;font-weight:700">${t("handoverNotes")}<textarea id="handoverNotesInput" rows="5" style="width:100%;border:1px solid #dfe8ec;border-radius:9px;padding:12px;font:inherit;font-size:12px" placeholder="${t("noNotes")}"></textarea></label><button class="primary-button" id="saveHandover" style="margin-top:12px">${t("saveNotes")}</button></section>`;
}
function renderMessages(){
  return `<div class="placeholder-heading"><div><h1>${t("messagesTitle")}</h1><p>${t("messagesSub")}</p></div></div><section class="placeholder-panel"><div id="chatList" class="simple-list">${chatMessages.map(m=>`<div class="simple-row"><div class="simple-icon">✉</div><div class="simple-text"><strong>${esc(m.from)} <small>· ${esc(m.time)}</small></strong><small>${esc(m.text)}</small></div></div>`).join("")}</div><form id="chatForm" style="display:flex;gap:8px;margin-top:18px"><input id="chatInput" required placeholder="${t("chatPlaceholder")}" style="flex:1;min-width:0;border:1px solid #dfe8ec;border-radius:9px;padding:10px;font:inherit;font-size:12px"><button class="primary-button" type="submit">${t("send")}</button></form><p style="font-size:10px;color:#9aa8b2;margin-bottom:0">${t("demoNotice")}</p></section>`;
}
function renderPage(){
  const content=$("#pageContent");
  if(activePage==="dashboard"){
    // Keep original dashboard markup and refresh dynamic areas.
    $("#pageTitle").textContent=pageNames.dashboard[lang];
    const title=$(".welcome-row h1");
    title.innerHTML=`<span>${t("welcome")}</span> <span class="wave">✦</span>`;
    $(".welcome-row .eyebrow span:last-child").textContent=t("goodMorning");
    $(".welcome-row p").textContent=t("welcomeSub");
    $("#quickTaskBtn").innerHTML=`<span>＋</span><span>${t("addTask")}</span>`;
    renderDashboard();
    return;
  }
  const footer=`<footer><span>© 2026 NurseFlow</span><span>${t("prototypeFooter")}</span></footer>`;
  const contentByPage={tasks:renderTasks,patients:renderPatients,shifts:renderShifts,handover:renderHandover,messages:renderMessages};
  content.innerHTML=`<div class="page-placeholder">${contentByPage[activePage]()}</div>${footer}`;
  if(activePage==="tasks")$("#pageAddTask")?.addEventListener("click",openModal);
  if(activePage==="handover")$("#saveHandover")?.addEventListener("click",()=>showToast(t("notesSaved")));
  if(activePage==="messages")$("#chatForm")?.addEventListener("submit",e=>{e.preventDefault();const input=$("#chatInput");const text=input.value.trim();if(!text)return;chatMessages.push({from:lang==="ar"?"أمينة":"Amina",text,time:new Date().toLocaleTimeString(lang==="ar"?"ar-JO":"en-US",{hour:"2-digit",minute:"2-digit"})});renderPage();showToast(t("sendDemo"));});
  content.querySelectorAll("[data-toggle-task]").forEach(btn=>btn.addEventListener("click",()=>toggleTask(Number(btn.dataset.toggleTask))));
  bindGoto();
}
function toggleTask(id){
  const task=tasks.find(x=>x.id===id);if(!task)return;
  task.done=!task.done;renderPage();showToast(t("taskUpdated"));
}
function bindGoto(){
  $$("[data-goto]").forEach(btn=>btn.addEventListener("click",()=>navigate(btn.dataset.goto)));
}
function navigate(page){
  if(!pageNames[page])return;
  activePage=page;
  $$(".nav-item").forEach(btn=>btn.classList.toggle("active",btn.dataset.page===page));
  $("#pageTitle").textContent=pageNames[page][lang];
  renderPage();
  $("#sidebar").classList.remove("open");
  window.scrollTo({top:0,behavior:"smooth"});
}
function openModal(){
  $("#modalTitle").textContent=t("newTask");
  $("#modalBackdrop").hidden=false;
  setTimeout(()=>$('#taskForm [name="title"]').focus(),50);
}
function closeModal(){ $("#modalBackdrop").hidden=true;$("#taskForm").reset(); }
$$(".nav-item").forEach(btn=>btn.addEventListener("click",()=>navigate(btn.dataset.page)));
$("#quickTaskBtn").addEventListener("click",openModal);
$("#closeModal").addEventListener("click",closeModal);
$("#cancelModal").addEventListener("click",closeModal);
$("#modalBackdrop").addEventListener("click",e=>{if(e.target===$("#modalBackdrop"))closeModal();});
$("#taskForm").addEventListener("submit",e=>{
  e.preventDefault();
  const data=new FormData(e.currentTarget);
  tasks.unshift({id:Date.now(),title:String(data.get("title")).trim(),patient:String(data.get("patient")),time:String(data.get("time")),priority:String(data.get("priority")),done:false,notes:String(data.get("notes")||"")});
  closeModal();navigate("tasks");showToast(t("taskAdded"));
});
$("#langBtn").addEventListener("click",()=>{lang=lang==="ar"?"en":"ar";applyLanguage();});
$("#globalSearch").addEventListener("input",()=>renderPage());
$("#notifyBtn").addEventListener("click",()=>showToast(t("notifyMessage")));
$("#logoutBtn").addEventListener("click",()=>showToast(t("logoutMessage")));
$("#aboutBtn").addEventListener("click",()=>showToast(t("aboutBody")));
$("#dismissNotice").addEventListener("click",()=>$(".notice-banner").remove());
$("#menuBtn").addEventListener("click",()=>$("#sidebar").classList.toggle("open"));
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal();});
bindGoto();
applyLanguage();
