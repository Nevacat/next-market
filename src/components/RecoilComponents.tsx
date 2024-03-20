'use client';

import { RecoilRoot, useSetRecoilState } from 'recoil';
import React from 'react';
import { user } from '@/atom/user';

interface RecoilRootWrapperProps {
	children: React.ReactNode;
}

export default function RecoilRootWrapper({
	children,
}: RecoilRootWrapperProps) {
	return <RecoilRoot>{children}</RecoilRoot>;
}