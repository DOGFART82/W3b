import { createAppKit } from 'https://esm.sh/@reown/appkit'
import { EthersAdapter } from 'https://esm.sh/@reown/appkit-adapter-ethers'
import { mainnet, bsc, polygon } from 'https://esm.sh/@reown/appkit/networks'

// 1. استخدام معرف المشروع الخاص بك
const projectId = 'cb431b6f6e2a73a72983084a5bd30989'

// 2. إعداد الشبكات (Ethereum, Binance, Polygon)
const networks = [mainnet, bsc, polygon]

// 3. إنشاء مودال الاتصال
const modal = createAppKit({
  adapters: [new EthersAdapter()],
  networks,
  metadata: {
    name: 'My Web3 App',
    description: 'Connect Wallet Mobile',
    url: window.location.origin, // سيأخذ رابط موقعك تلقائياً
    icons: ['https://avatars.githubusercontent.com/u/37784886']
  },
  projectId,
  themeMode: 'dark', // ليتناسب مع تصميمك
  features: {
    analytics: true,
    email: false, // يمكنك تفعيلها إذا أردت تسجيل دخول بالبريد
    socials: []
  }
})

// اختياري: طباعة العنوان في الكونسول عند التغيير
modal.subscribeAccount(state => {
  if (state.isConnected) {
    console.log('Account connected:', state.address)
    document.getElementById('info').innerText = "تم الاتصال بنجاح!"
  } else {
    document.getElementById('info').innerText = "بانتظار ربط المحفظة..."
  }
})
