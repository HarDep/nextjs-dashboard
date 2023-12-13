import Pagination from '@/app/ui/invoices/pagination';
import { fetchInvoicesPages } from '@/app/lib/data';

export default async function PaginationContainer({ query }: { query: string }) {
    const totalPages = await fetchInvoicesPages(query);
    return (
        <div className="mt-5 flex w-full justify-center">
            <div className="inline-flex">
                <Pagination totalPages={totalPages} />
            </div>
        </div>
    )
}
