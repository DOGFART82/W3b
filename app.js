const connectBtn = document.getElementById('connectBtn');
const statusText = document.getElementById('status');

async function connect() {
    // التأكد من أن المستخدم يفتح الصفحة من داخل متصفح محفظة
    if (typeof window.ethereum !== 'undefined') {
        try {
            // طلب إذن الوصول للحسابات
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const address = accounts[0];

            // تحسين شكل العنوان (0x1234...abcd)
            const shortAddr = address.substring(0, 6) + "..." + address.substring(address.length - 4);
            
            // تحديث الزر
            connectBtn.innerText = shortAddr;
            connectBtn.classList.remove('bg-indigo-600');
            connectBtn.classList.add('bg-gradient-to-r', 'from-green-500', 'to-emerald-600');
            
            statusText.innerText = "تم الربط بنجاح مع محفظة الهاتف";
        } catch (error) {
            statusText.innerText = "خطأ: تأكد من قبول طلب الربط";
        }
    } else {
        // إذا فتح المستخدم الصفحة من متصفح عادي مثل Chrome هاتف
        statusText.innerText = "يرجى فتح هذا الرابط من داخل متصفح MetaMask أو Trust Wallet";
        
        // محاولة توجيه المستخدم لفتح تطبيق ميتاماسك تلقائياً
        setTimeout(() => {
            window.location.href = "https://metamask.app.link/dapp/" + window.location.host + window.location.pathname;
        }, 2000);
    }
}

connectBtn.addEventListener('click', connect);

// الاستماع لتغيير الحساب يدوياً داخل التطبيق
if (window.ethereum) {
    window.ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length > 0) connect();
        else window.location.reload();
    });
}
