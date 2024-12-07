<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(
            \App\Repositories\User\UserRepositoryInterface::class,
            \App\Repositories\User\UserEloquentRepository::class,
        );

        $this->app->singleton(
            \App\Repositories\Company\CompanyRepositoryInterface::class,
            \App\Repositories\Company\CompanyEloquentRepository::class,
        );

        $this->app->singleton(
            \App\Repositories\JobDetail\JobDetailRepositoryInterface::class,
            \App\Repositories\JobDetail\JobDetailEloquentRepository::class,
        );

        $this->app->singleton(
            \App\Repositories\JobFair\JobFairRepositoryInterface::class,
            \App\Repositories\JobFair\JobFairEloquentRepository::class,
        );

        $this->app->singleton(
            \App\Repositories\Reference\ReferenceRepositoryInterface::class,
            \App\Repositories\Reference\ReferenceEloquentRepository::class,
        );
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
