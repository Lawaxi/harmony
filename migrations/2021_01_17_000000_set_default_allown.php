<?php
use Illuminate\Database\Schema\Builder;
return [
    'up' => function (Builder $schema) {
        /**
         * @var \Flarum\Settings\SettingsRepositoryInterface
         */
        $settings = resolve('flarum.settings');

        $settings->set('lawaxi-harmony.allown', "delay");
        $settings->set('lawaxi-harmony.blogtitle', "六边形博客");
        $settings->set('lawaxi-harmony.blogsubtitle', "“若夫学者，则无所不思，无所不言，以其无责，可以行其志也；若云思不出其位，是自弃于浅陋之学也。” 本站为 delay 个人学习生活兴趣分享博客。");
        $settings->set('lawaxi-harmony.ban', "习,江,彭,台,北京,扬州,续,论坛,社区");
        $settings->set('lawaxi-harmony.bantags', "teahouse");
    },
    'down' => function (Builder $schema) {
        /**
         * @var \Flarum\Settings\SettingsRepositoryInterface
         */
        $settings = resolve('flarum.settings');
        $settings->delete('lawaxi-harmony.allown');
        $settings->delete('lawaxi-harmony.blogtitle');
        $settings->delete('lawaxi-harmony.blogsubtitle');
        $settings->delete('lawaxi-harmony.ban');
        $settings->delete('lawaxi-harmony.bantags');
    },
];
