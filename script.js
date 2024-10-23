document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // عناصر لإظهار رسالة تأكيد
    const confirmationMessage = document.getElementById("confirmation-message");
    const formContainer = document.getElementById("form-container");

    if (name === "" || email === "" || message === "") {
        confirmationMessage.innerHTML = "<p style='color: red;'>يرجى ملء جميع الحقول.</p>";
        confirmationMessage.style.display = "block";
    } else {
        confirmationMessage.innerHTML = "<p style='color: green;'>تم إرسال الرسالة بنجاح!</p>";
        confirmationMessage.style.display = "block";

        // إعادة تعيين الحقول بعد الإرسال
        document.getElementById("contact-form").reset();

        // إخفاء الرسالة بعد 3 ثوانٍ
        setTimeout(() => {
            confirmationMessage.style.display = "none";
        }, 3000);

        // يمكنك هنا إضافة كود لإرسال البيانات إلى الخادم
    }
});
