import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";
const supabaseUrl = "https://iprlbkddmgolrnkhqwrh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlwcmxia2RkbWdvbHJua2hxd3JoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU4MDA1ODIsImV4cCI6MjA2MTM3NjU4Mn0.x5ueV-3t0uzsS9ifzQRO9m8dT5Iv8OF2qu0_n3M-Dwk";
const supabase = createClient(supabaseUrl, supabaseKey);
let admin = false;
document.querySelector(".bttt").addEventListener("click", async () => {
  event.preventDefault();
  const { data, error } = await supabase
    .from("password")
    .select("id, password");
  let pass = document.querySelector(".passs").value;
  if (pass === data[0].password) {
    document.querySelector("#sfdf1").innerHTML = "Admin";
    document.querySelector("#sfdf1").style.color = "green";
    document.querySelector(".h3").innerHTML = "Login successful";
    document.querySelector("h3").style.color = "green";
    tt();
    setTimeout(() => {
      document.querySelector(".admin").classList.toggle("adminnan");
    }, 2000);
    setTimeout(() => {
      document.querySelector(".admin").style.display = "none";
    }, 2120);
    admin = true;
    document.querySelector(".edit").style.display = "block";
    document.querySelector("#formimg").style.display = "block";
    document.querySelector("#btmm").style.display = "block";
    h();
  } else {
    document.querySelector(".h3").innerHTML = "The Password is Worng";
    document.querySelector("h3").style.color = "red";
    setTimeout(() => {
      document.querySelector(".h3").style.color = "white";
      document.querySelector(".h3").innerHTML = "Enter The password";
    }, 2000);
  }
  document.querySelector(".formm").reset();
  if (error) {
    console.error("خطأ في استرجاع البيانات:", error);
    return;
  }
});

let ht1 = document.getElementById("ht1");
let ht2 = document.getElementById("ht2");
let ht3 = document.getElementById("ht3");
let ht4 = document.getElementById("ht4");
let prt1 = document.getElementById("dds1");
let prt2 = document.getElementById("dds2");
let prt3 = document.getElementById("dds3");
let prt4 = document.getElementById("dds4");
let dds1 = document.getElementById("dd");

function fgfg() {
  setTimeout(() => {
    document.getElementById("ffdf").style.opacity = "1";
  }, 2200);
  setTimeout(() => {
    document.getElementById("ffdf2").style.opacity = "1";
  }, 2700);
  setTimeout(() => {
    document.getElementById("ffdf3").style.opacity = "1";
  }, 3200);
  setTimeout(() => {
    document.getElementById("ffdf4").style.opacity = "1";
  }, 3700);
  setTimeout(() => {
    document.getElementById("ffdf5").style.opacity = "1";
  }, 4200);
  setTimeout(() => {
    document.getElementById("sfdf1").style.opacity = "1";
  }, 550);
  setTimeout(() => {
    document.getElementById("sfdf2").style.opacity = "1";
  }, 1050);
  setTimeout(() => {
    document.getElementById("sfdf3").style.opacity = "1";
  }, 1550);
  setTimeout(() => {
    document.getElementById("sfdf4").style.opacity = "1";
  }, 2050);
}

const texte = document.querySelector("#inf");
function text() {
  setTimeout(() => {
    texte.textContent = "React.js";
  }, 0);
  setTimeout(() => {
    texte.textContent = "HTML ";
  }, 4000);
  setTimeout(() => {
    texte.textContent = "CSS ";
  }, 8000);
  setTimeout(() => {
    texte.textContent = "JavaScript ";
  }, 12000);
}

window.onload = function () {
  fgfg();
  text();
  setInterval(text, 16000);
};
document.querySelector("#sfdf1").addEventListener("click", () => {
  if (admin === false) {
    document.getElementById("passs").focus();
    document.querySelector(".admin").classList.toggle("adminnan");
  }
});
document.querySelector("#btcs").addEventListener("click", () => {
  document.querySelector(".a").classList.toggle("aa");
});
document.querySelector("#btss").addEventListener("click", () => {
  document.querySelector(".as").classList.toggle("aa");
});

function h() {
  if (admin === false) {
    document.querySelector("#btss").style.display = "none";
    document.querySelector("#btcs").style.display = "none";
    document
      .querySelectorAll(".btnrr")
      .forEach((h) => (h.style.display = "none"));
  } else {
    document.querySelector("#btss").style.display = "flex";
    document.querySelector("#btcs").style.display = "flex";
    document
      .querySelectorAll(".btnrr")
      .forEach((h) => (h.style.display = "block"));
  }
}

document.getElementById("crt").addEventListener("click", async () => {
  event.preventDefault();
  const url = document.getElementById("js").value;
  const file = document.getElementById("jsf").files[0];
  if (!file || !url) {
    alert("رجاءً ارفع صورة واكتب رابط");
    return;
  }
  const filePath = `public/${Date.now()}_${file.name}`;
  const { data: uploadData, error: uploadError } = await supabase.storage
    .from("img")
    .upload(filePath, file);
  if (uploadError) {
    console.error("خطأ في رفع الصورة:", uploadError);
    alert("فشل رفع الصورة!");
    return;
  }
  const imageUrl = supabase.storage.from("img").getPublicUrl(filePath)
    .data.publicUrl;
  const { data: insertData, error: insertError } = await supabase
    .from("posts")
    .insert([{ title: url, image_url: imageUrl }]);
  if (insertError) {
    console.error("خطأ في حفظ البيانات:", insertError);
    alert("فشل حفظ البيانات!");
    return;
  }
  alert("تم رفع الصورة وحفظ العنوان بنجاح! 🎉");
  document.getElementById("cpro").reset();
});
let ht = ``;
const { data, error } = await supabase
  .from("posts")
  .select("id, title, image_url")
  .order("id", { ascending: false });
function htmlg() {
  if (error) {
    console.error("خطأ في حفظ البيانات:", insertError);
    alert("فشل حفظ البيانات!");
    return;
  }
  data.forEach((element) => {
    ht += ` <div id='${element.title}' data-aos="fade-left" class="projcat" id="dds4">
             <button data-re-move='${element.title}' class="btnrr">remove</button>
              <img src="${element.image_url}" loading="lazy" alt="Project 4 preview" />
              <a id="a" href="${element.title}">view</a>
            </div>`;
  });
  document.querySelector(".proo").innerHTML = ht;
  document.querySelectorAll(".btnrr").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const { data, error } = await supabase
        .from("posts")
        .delete()
        .eq("title", btn.dataset.reMove);
      if (error) {
        alert("حدث خطأ أثناء الحذف:");
      } else {
        alert("تم الحذف بنجاح:");
      }
      document.getElementById(btn.dataset.reMove).remove();
    });
  });
}
htmlg();
h();
document.getElementById("btmm").addEventListener("click", async () => {
  const file = document.getElementById("imgch").files[0];
  if (!file) {
    alert("رجاءً ارفع صورة");
    return;
  }

  const filePath = `public/${Date.now()}_${file.name}`;

  const { data, error } = await supabase.storage
    .from("imgpro")
    .upload(filePath, file);
  if (error) {
    console.error("خطأ في رفع الصورة:", error);
    alert("فشل رفع الصورة!");
    return;
  }
  const imageUrl = supabase.storage.from("imgpro").getPublicUrl(filePath)
    .data.publicUrl;
  const { data: dd, error: de } = await supabase
    .from("imgpro")
    .update({ url: imageUrl })
    .eq("id", 30);
  const { data: sData, error: serror } = await supabase
    .from("imgpro")
    .select("url");
  const urlimg = sData.map((item) => item.url);
  function efefg() {
    document.getElementById("imgoo").src = urlimg;
    document.getElementById("imgooo").src = urlimg;
  }
  efefg();
  document.getElementById("formimg").reset();
});

const { data: sData, error: serror } = await supabase
  .from("imgpro")
  .select("url");
const urlimg = sData.map((item) => item.url);
function efefg() {
  document.getElementById("imgoo").src = urlimg;
  document.getElementById("imgooo").src = urlimg;
}
efefg();
async function textarea() {
  const { data: textdata, error: texterror } = await supabase
    .from("text")
    .select("text");
  document.querySelector(".ppp").innerHTML = textdata.map((f) => f.text);
  document.querySelector("textarea").innerHTML = textdata.map((f) => f.text);
}
textarea();
document.querySelector(".edit").addEventListener("click", () => {
  document.querySelector(".ppp").style.opacity = 0;
  document.querySelector("textarea").style.display = "block";
  document.querySelector(".save").style.display = "block";
  document.querySelector("textarea").focus();
});
document.querySelector(".save").addEventListener("click", async () => {
  let ttt = document.querySelector("textarea").value;
  const { data: textdata, error: texterror } = await supabase
    .from("text")
    .update({ text: ttt })
    .eq("id", 1);
  textarea();
  document.querySelector(".save").style.display = "none";
  document.querySelector("textarea").style.display = "none";
  document.querySelector(".ppp").style.opacity = 1;
});
function tt() {
  if (admin === true) {
    document.querySelector(".edit").style.display = "block";
    document.querySelector("#formimg").style.display = "block";
    document.querySelector("#btmm").style.display = "block";
  }
}
tt();
