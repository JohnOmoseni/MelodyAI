import { useSelector } from "react-redux";
import { GoBack } from "../IconBg";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getUserProfile } from "@lib/fetch/getReq";

function UserProfile() {
	const { token, user } = useSelector((state) => state.userState);
	const { id } = user;
	const [isLoading, setIsLoading] = useState(false);
	const [userProfile, setUserProfile] = useState(user);

	useEffect(() => {
		const fetchUser = async () => {
			if (user || id) return;

			try {
				setIsLoading(true);
				const response = await getUserProfile(id, token);
				console.log(response);

				if (response) {
					setUserProfile(response);
				}
			} catch (error) {
				console.error("Error:", error.message);
				toast.error(`Failed to fetch user:  ${user?.firstname}`);
			} finally {
				setIsLoading(false);
			}
		};

		fetchUser();
	}, []);

	return (
		<div className="relative h-full left-0 top-0 w-full grid place-items-center overflow-hidden">
			<GoBack className="absolute right-4 top-0" />
			<div className="absolute">
				<h2>User Profile</h2>
				<p className="whitespace-pre w-full">
					{userProfile && userProfile.firstname}
				</p>
			</div>
		</div>
	);
}

export default UserProfile;
