import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { getAccount, getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions'


const Home = async ({ searchParams: { id, page } }: SearchParamProps) => {
    const loggedIn = await getLoggedInUser();
    const accounts = await getAccounts({ 
      userId: loggedIn.$id 
    })

    if(!accounts) return;

    const accountsData = accounts?.data;
    const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;
    
    if (!appwriteItemId) {
        console.error("appwriteItemId is not defined");
        return;
    }

    const account = await getAccount({ appwriteItemId })

    console.log(
        accountsData,
        account
    )
    
    return (
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.firstName || 'Guest'}
                        subtext="Acces and manage oyur account and transactions efficiently."
                    />

                    <TotalBalanceBox 
                        accounts={[accountsData]}
                        totalBanks={accounts?.totalBanks}
                        totalCurrentBalance={accounts?.totalCurrentBalance}
                    />
                </header>

                RECENT TRANSACTIONS
                
            </div>

            <RightSidebar
                user={loggedIn}
                transactions={[accounts?.transactions]}
                banks={accountsData?.slice(0 ,2)} 
            />
        </section>
    )
}

export default Home