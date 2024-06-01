// POST Requests
const BASE_URL = "https://melody-ai.up.railway.app";

// Auth
export async function register(body) {
	const res = await fetch(`${BASE_URL}/auth/signup`, {
		method: "POST",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
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
const body = {
	email: "johnny@gmail.com",
	password: 12345,
};

export async function signIn(body) {
	const res = await fetch(`${BASE_URL}/auth/login`, {
		method: "POST",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		},
	});

	if (!res.ok) {
		const errorData = await res.text();
		throw new Error(errorData);
	}

	const data = await res.json();
	const result = typeof data === "string" ? JSON.parse(data) : data;

	return result;
}

// Dashboard
export async function createNewProject(projectName, formData, token) {
	const res = await fetch(`${BASE_URL}/dashboard?project_name=${projectName}`, {
		method: "POST",
		body: formData,
		headers: {
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

// Insights
export async function postInsights(body, token) {
	const res = await fetch(`${BASE_URL}/insights`, {
		method: "POST",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	});

	if (!res.ok) {
		const errorData = await res.text();
		throw new Error(errorData);
	}
	return res.json();
	const data = await res.json();
	const result = typeof data === "string" ? JSON.parse(data) : data;

	return result;
}

// Chatbot
export async function postChatbot(body, token) {
	const res = await fetch(`${BASE_URL}/chatbot`, {
		method: "POST",
		body: JSON.stringify(body),
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
