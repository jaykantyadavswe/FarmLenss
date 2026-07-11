"use client";

import { useState } from "react";

import HistoryHeader from "../components/history/header/HistoryHeader";
import HistoryStats from "../components/history/header/HistoryStats";
import HistorySearch from "../components/history/search/HistorySearch";
import FilterBar from "../components/history/search/FilterBar";
import ViewToggle from "../components/history/search/ViewToggle";
import HistoryGrid from "../components/history/HistoryGrid";
import HistoryList from "../components/history/list/HistoryList";
import Pagination from "../components/history/Common/Pagination";
import EmptyState from "../components/history/Common/EmptyState";

export default function HistoryPage() {

  const [view, setView] = useState<"grid" | "list">("grid");

  return (
    <main className="min-h-screen bg-zinc-50">

      <div className="mx-auto max-w-7xl space-y-8 p-8">

        {/* Header */}

        <HistoryHeader />

        {/* Analytics */}

        <HistoryStats />

        {/* Search + Filters */}

        <section className="rounded-3xl border bg-white p-6 shadow-sm">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <HistorySearch />

            <div className="flex flex-wrap items-center gap-4">

              <FilterBar />

              <ViewToggle
                view={view}
                setView={setView}
              />

            </div>

          </div>

        </section>

        {/* Results */}

        {history.length === 0 ? (

          <EmptyState />

        ) : (

          <>
            {/* Result Count */}

            <div className="flex items-center justify-between">

              <div>

                <h2 className="text-xl font-semibold">

                  Recent Analyses

                </h2>

                <p className="text-sm text-zinc-500">

                  Showing {history.length} reports

                </p>

              </div>

            </div>

            {/* Grid / List */}

            {view === "grid" ? (

              <HistoryGrid />

            ) : (

              <HistoryList />

            )}

            {/* Pagination */}

            <Pagination />

          </>

        )}

      </div>
    </main>
  );

}