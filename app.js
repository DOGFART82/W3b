import { createAppKit } from 'https://cdn.jsdelivr.net/npm/@reown/appkit/+esm'
import { EthersAdapter } from 'https://cdn.jsdelivr.net/npm/@reown/appkit-adapter-ethers/+esm'
import { mainnet, bsc } from 'https://cdn.jsdelivr.net/npm/@reown/appkit/networks/+esm'

const projectId = 'cb431b6f6e2a73a72983084a5bd30989'

try {
    const modal = createAppKit({
        adapters: [new EthersAdapter()],
        networks: [mainnet, bsc],
        metadata: {
            name: 'Web3 App',
            description: 'Mobile Connect',
            url: window.location.origin,
            icons: ['https://avatars.githubusercontent.com/u/37784886']
        },
        projectId,
        features: {
            analytics: false
        }
    })
    console.log("AppKit Loaded Successfully");
} catch (error) {
    console.error("Failed to load AppKit:", error);
    document.getElementById('status').innerText = "خطأ في تحميل النظام البرمجي";
}
