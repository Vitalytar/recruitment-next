'use server';

import { redirect } from 'next/navigation';
import { createCheckoutSession, createCustomerPortalSession } from './stripe';
import { withTeam } from '@/lib/auth/middleware';

import { getTeamForUser } from '@/lib/db/queries';

export async function checkoutAction(formData: FormData) {
    const priceId = formData.get('priceId') as string;
    const team = await getTeamForUser();
    await createCheckoutSession({ team, priceId });
}

export const customerPortalAction = withTeam(async (_, team) => {
    const portalSession = await createCustomerPortalSession(team);
    redirect(portalSession.url);
});
