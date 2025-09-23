import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { NextRequest } from "next/server";

export async function getSession() {
  return await getServerSession(authOptions);
}

export async function requireAuth() {
  const session = await getSession();

  if (!session || !session.user) {
    throw new Error("Unauthorized");
  }

  return session;
}

export async function requireAdmin() {
  const session = await requireAuth();

  if (session.user.role !== "admin") {
    throw new Error("Admin access required");
  }

  return session;
}

export async function getCurrentUser() {
  const session = await getSession();
  return session?.user || null;
}

// For API routes
export async function authenticateAPIRequest(request: NextRequest) {
  const session = await getSession();

  if (!session || !session.user) {
    return { error: "Unauthorized", status: 401 };
  }

  return { user: session.user, status: 200 };
}

export async function requireAdminAPI(request: NextRequest) {
  const auth = await authenticateAPIRequest(request);

  if (auth.error) {
    return auth;
  }

  if (auth.user.role !== "admin") {
    return { error: "Admin access required", status: 403 };
  }

  return auth;
}
