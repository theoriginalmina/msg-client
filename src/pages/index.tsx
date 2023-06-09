import type { NextPage } from "next";
import {signIn, useSession,signOut} from "next-auth/react";

const Home: NextPage = () => {
	const {data} = useSession();

	console.log("DATA", data);
	
	return (
			<div>
			{data?.user ?
				<button onClick={() => signOut()} >Sign Out</button>	 
			:
				<button onClick={() => signIn("google")}>Sign In</button>
			}
				{data?.user?.name}
			</div>
		)
};

export default Home;
