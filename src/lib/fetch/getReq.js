// GET Requests
const BASE_URL = "https://fortunate-leslie-melody-ai-62ece1e9.koyeb.app";

// Projects
export async function getAllProjects(token, { signal }) {
	const res = await fetch(`${BASE_URL}/projects/all`, {
		signal,
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	});

	if (!res.ok) {
		const errorData = await res.text();
		throw new Error(errorData);
	}

	// return res.json();

	const data = await res.json();
	const result = typeof data == "string" ? JSON.parse(data) : data;

	return result;
}

export async function getProject(projectId, token) {
	const res = await fetch(`${BASE_URL}/project/${projectId}`, {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	});

	if (!res.ok) {
		const errorData = await res.text();
		throw new Error(errorData);
	}

	const data = await res.json();
	const result = typeof data == "string" ? JSON.parse(data) : data;

	return result;
}

// User Profile
export async function getUserProfile(userId, token) {
	const res = await fetch(`${BASE_URL}/user/me`, {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	});

	if (!res.ok) {
		const errorData = await res.text();
		throw new Error(errorData);
	}

	const data = await res.json();
	const result = typeof data == "string" ? JSON.parse(data) : data;

	return result;
}

// Chatbot
export async function getAllMessages(projectId, token) {
	const res = await fetch(`${BASE_URL}/messages/all?project_id=/${projectId}`, {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	});

	if (!res.ok) {
		const errorData = await res.text();
		throw new Error(errorData);
	}

	const data = await res.json();
	const result = typeof data == "string" ? JSON.parse(data) : data;

	return result;
}

export const HttpCaller = async (
	route,
	method = "POST",
	body,
	headers,
	isJSON
) => {
	const res = await fetch(`${BASE_URL}/${route}`, {
		method: method,
		body:
			typeof body === "string" ? body : isJSON ? JSON.stringify(body) : body,
		headers: headers,
	});

	if (!res.ok) {
		const errorData = await res.text();
		throw new Error(errorData);
	}

	const resData = await res.json();
	const result = typeof resData === "string" ? JSON.parse(resData) : resData;

	return result;
};

export const runFetchData = async (route, body, headers, abortFetch) => {
	const controller = new AbortController();
	const signal = controller.signal;

	const res = await fetch(`${BASE_URL}/${route}`, {
		method: "POST",
		body: body,
		headers: headers,
		signal,
	});

	if (abortFetch === true) controller.abort();

	if (!res.ok) {
		const errorData = await res.text();
		throw new Error(errorData);
	}

	const resData = await res.json();
	const result = typeof resData == "string" ? JSON.parse(resData) : resData;

	return result;
};
