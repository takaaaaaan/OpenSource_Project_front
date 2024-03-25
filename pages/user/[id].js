// pages/user/[id].js
import { useRouter } from 'next/router';

const UserPage = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <h1>ユーザーID: {id}</h1>
        </div>
    );
};

export default UserPage;
