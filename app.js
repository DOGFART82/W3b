import { createAppKit } from 'https://esm.sh/@reown/appkit'
import { EthersAdapter } from 'https://esm.sh/@reown/appkit-adapter-ethers'
import { mainnet, bsc } from 'https://esm.sh/@reown/appkit/networks'

// معرف المشروع الخاص بك
const projectId = 'cb431b6f6e2a73a72983084a5bd30989'

// إعداد النظام
const modal = createAppKit({
  adapters: [new EthersAdapter()],
  networks: [mainnet, bsc],
  metadata: {
    name: 'My App',
    description: 'Wagmi Connection',
    url: window.location.origin,
    icons: ['https://avatars.githubusercontent.com/u/37784886']
  },
  projectId,
  themeMode: 'dark',
  themeVariables: {
    '--w3m-accent': '#4f46e5', // لون الزر الأساسي
    '--w3m-border-radius-master': '12px'
  }
})

// مراقبة حالة الاتصال وتحديث العنوان
modal.subscribeAccount(state => {
  const statusEl = document.getElementById('status');
  if (state.isConnected) {
    statusEl.innerText = `Connected: ${state.address}`;
    statusEl.classList.add('text-green-500');
  } else {
    statusEl.innerText = "Disconnected";
    statusEl.classList.remove('text-green-500');
  }
})
