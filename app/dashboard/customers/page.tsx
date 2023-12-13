import { Metadata } from 'next';
import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import CustomersTable from '@/app/ui/customers/table';
import { Suspense } from 'react';
import { CustomersTableSkeleton } from '@/app/ui/skeletons';

export const metadata: Metadata = {
    title: 'Customers',
};

export default function CustomersPage({ searchParams }: { searchParams?: { query?: string; }; }) {
    const query = searchParams?.query || '';
    return (
        <div className="w-full">
            <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
                Customers
            </h1>
            <Search placeholder="Search customers..." />
            <Suspense key={query} fallback={<CustomersTableSkeleton />}>
                <CustomersTable query={query}></CustomersTable>
            </Suspense>
        </div>
    )
}
