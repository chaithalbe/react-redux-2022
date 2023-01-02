import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { addUser, fetchUsers } from "../store";
import Button from "./Button";
import Skeleton from "./Skeleton";
import { useThunk } from "../hooks/useThunk";
import UsersListItem from "./UsersListItem";

export default function UsersList() {
	const [doFetchUsers, isLoadingUsers, loadingUsersError] =
		useThunk(fetchUsers);
	const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);

	const { data } = useSelector((state) => {
		return state.users;
	});

	useEffect(() => {
		doFetchUsers();
	}, [doFetchUsers]);

	const handleUserAdd = () => {
		doCreateUser();
	};

	let content;
	if (isLoadingUsers) {
		content = <Skeleton times={6} className='h-10 w-full' />;
	} else if (loadingUsersError) {
		content = <div>Error fetching data...</div>;
	} else {
		content = data.map((user) => {
			return <UsersListItem key={user.id} user={user} />;
		});
	}

	return (
		<div>
			<div className='flex flex-row justify-between m-3 items-center'>
				<h1 className='m-2 text-xl'>Users</h1>
				<Button onClick={handleUserAdd} loading={isCreatingUser}>
					+ Add User
				</Button>
				{creatingUserError && "Error creating user..."}
			</div>
			{content}
		</div>
	);
}
