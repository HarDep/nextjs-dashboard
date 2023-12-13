//import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/invoices/table';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { lusitana } from '@/app/ui/fonts';
import { InvoicesTableSkeleton, PaginationSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
//import { fetchInvoicesPages } from '@/app/lib/data';
import { Metadata } from 'next';
import PaginationContainer from '@/app/ui/invoices/pagination-container';

export const metadata: Metadata = {
    title: 'Invoices',
};

export default async function Page({ searchParams }: { searchParams?: { query?: string; page?: string; }; }) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    //const totalPages = await fetchInvoicesPages(query);
    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Search invoices..." />
                <CreateInvoice />
            </div>
            {/* key en suspense hace que cuando el key cambia va a realizar el suspense otra vez */}
            <Suspense key={query + currentPage} fallback={<><InvoicesTableSkeleton /><PaginationSkeleton /></>}>
                <Table query={query} currentPage={currentPage} />
                <PaginationContainer query={query} ></PaginationContainer>
            </Suspense>
            {/* <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
            </div> */}
        </div>
    );
}