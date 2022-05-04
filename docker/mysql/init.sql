CREATE DATABASE p2m;
USE p2m;

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `files` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `path` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `class` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `matier` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `files` (`id`, `title`, `path`, `class`, `matier`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'P2M', 'storage/course/cv2.1_1651464146.pdf', 'INDP1 A', 'p2m', '3', '2022-05-02 03:02:26', '2022-05-02 03:02:26'),
(2, 'John Doe', 'storage/course/file_1651464667.jpg', 'INDP1 A', '22222123', '3', '2022-05-02 03:11:07', '2022-05-02 03:11:07'),
(3, 'John Doe', 'storage/course/file_1651464935.jpg', 'INDP1 A', '22222123', '3', '2022-05-02 03:15:35', '2022-05-02 03:15:35'),
(4, 'John Doe', 'storage/course/file_1651464943.jpg', 'INDP1 A', '22222123', '3', '2022-05-02 03:15:43', '2022-05-02 03:15:43'),
(5, 'John Doe', 'storage/course/file_1651464955.jpg', 'INDP1 A', '22222123', '3', '2022-05-02 03:15:55', '2022-05-02 03:15:55'),
(6, 'John Doe', 'storage/course/file_1651464978.jpg', 'INDP1 A', '22222123', '3', '2022-05-02 03:16:18', '2022-05-02 03:16:18'),
(7, 'John Doe', 'storage/course/file_1651465062.jpg', 'INDP1 A', '22222123', '3', '2022-05-02 03:17:42', '2022-05-02 03:17:42'),
(8, 'John Doe', 'storage/course/file_1651465081.jpg', 'INDP1 A', '22222123', '3', '2022-05-02 03:18:01', '2022-05-02 03:18:01'),
(9, 'John Doe', 'storage/course/file_1651465105.jpg', 'INDP1 A', '22222123', '3', '2022-05-02 03:18:25', '2022-05-02 03:18:25'),
(10, 'John Doe', 'storage/course/file_1651465191.jpg', 'INDP1 A', '22222123', '3', '2022-05-02 03:19:51', '2022-05-02 03:19:51');

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2016_06_01_000001_create_oauth_auth_codes_table', 1),
(4, '2016_06_01_000002_create_oauth_access_tokens_table', 1),
(5, '2016_06_01_000003_create_oauth_refresh_tokens_table', 1),
(6, '2016_06_01_000004_create_oauth_clients_table', 1),
(7, '2016_06_01_000005_create_oauth_personal_access_clients_table', 1),
(8, '2019_08_19_000000_create_failed_jobs_table', 1),
(9, '2021_03_20_225643_create_files_table', 1);

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
('16775278d6bf9c2a35f3c973f4c0a82488854fdca9e86a2d6c9ab62bffa4854811f840b7752fa50b', 3, 1, 'authToken', '[]', 0, '2022-05-02 03:18:01', '2022-05-02 03:18:01', '2023-05-02 04:18:01'),
('1fbd67e1215333ee179ac5fdc70595e3b5e59ef82e68bbdeec27746472f4eafd0da1fd12903aad89', 3, 1, 'authToken', '[]', 0, '2022-05-02 03:15:34', '2022-05-02 03:15:34', '2023-05-02 04:15:34'),
('3d7c63421c7dd26ff34882b594aab02741449b54318d6f3ed434997b270ee12dfdcf821b9d2c3fd9', 3, 1, 'authToken', '[]', 0, '2022-05-02 03:18:25', '2022-05-02 03:18:25', '2023-05-02 04:18:25'),
('41bcb1544a764ac5e4d923ceae3a4aa8e4afbf5748bf430183c64cc4ad7b87df07cd33782c82a8d4', 3, 1, 'authToken', '[]', 0, '2022-05-02 02:58:35', '2022-05-02 02:58:35', '2023-05-02 03:58:35'),
('474aa7ea8721ed0061399bd5c8880d63df2a74b331ad0a2b4eb786dd1cbdfd4494aa94ab4406b64c', 3, 1, 'authToken', '[]', 0, '2022-05-02 03:18:01', '2022-05-02 03:18:01', '2023-05-02 04:18:01'),
('49e7f3839f2805dd201d8acb8a58910692b5e5ec4fc7d41786bc769b61214ba3f7feb83bae2d6a9e', 3, 1, 'authToken', '[]', 0, '2022-05-02 03:15:55', '2022-05-02 03:15:55', '2023-05-02 04:15:55'),
('594faf994637bd0737daa7c039489977a8fd15b6c04c4293305f91266e36f895a5f13cb2b5828cfb', 3, 1, 'authToken', '[]', 0, '2022-05-02 03:17:42', '2022-05-02 03:17:42', '2023-05-02 04:17:42'),
('6b7a54efab30f60ae5089681d16d258a7335512f1d662b0906fd0f523b20ce4da140fe7ca9824923', 3, 1, 'authToken', '[]', 0, '2022-05-02 03:15:35', '2022-05-02 03:15:35', '2023-05-02 04:15:35'),
('6ee0fe2a00468ba6f695843a4d3c98b8eb81ca83bfec81ff27ca664cae21e66730d83d0067df0a17', 3, 1, 'authToken', '[]', 0, '2022-05-02 03:17:42', '2022-05-02 03:17:42', '2023-05-02 04:17:42'),
('791b4128175c8373b1c285f4692c6fe1d004d32e240844bff4171c512217e78a7f9ccc275dce7bab', 3, 1, 'authToken', '[]', 0, '2022-05-02 03:19:51', '2022-05-02 03:19:51', '2023-05-02 04:19:51'),
('7f0978c920e4c504482e64e8ae55cd663db275747567b8a84d329e1280e30977b76160c4690cd64e', 3, 1, 'authToken', '[]', 0, '2022-05-02 02:59:05', '2022-05-02 02:59:05', '2023-05-02 03:59:05'),
('83bb0336e1f4831bfb04cbb48d688d2c40b833305711f8339726ab55b6c0b3a4a29db43ad5e2608a', 3, 1, 'authToken', '[]', 0, '2022-05-02 03:11:07', '2022-05-02 03:11:07', '2023-05-02 04:11:07'),
('87d3e67d558dbceb490eda11a72da66ca4535e03bd725b543c73a83f27093d24aa51a2c53b601b06', 3, 1, 'authToken', '[]', 0, '2022-05-02 03:16:18', '2022-05-02 03:16:18', '2023-05-02 04:16:18'),
('8975244677c6e8076b534fb529c86456e633f143cf242313c515bc637afdb0a6fa0f6400456f9e1a', 3, 1, 'authToken', '[]', 0, '2022-05-02 03:16:18', '2022-05-02 03:16:18', '2023-05-02 04:16:18'),
('99a73be0f978c69e2ac73869963d9f3e786886f3a29fe2bc2a5c9f0fc29ac80d75e78675222d5bf1', 3, 1, 'authToken', '[]', 0, '2022-05-02 03:15:43', '2022-05-02 03:15:43', '2023-05-02 04:15:43'),
('9fbbae4dc5b00159f36ddf54917f14f2ba9b82884d2b529046cd8035478a2a9b5e83e251c9548ede', 3, 1, 'authToken', '[]', 0, '2022-05-02 03:19:51', '2022-05-02 03:19:51', '2023-05-02 04:19:51'),
('a44690e1b17b605ee5cc8ab749dd2211f672d150e96249790deae81ae07d66869788611526cb85e6', 3, 1, 'authToken', '[]', 0, '2022-05-02 03:18:25', '2022-05-02 03:18:25', '2023-05-02 04:18:25'),
('be9c0350d3fe4874e84251dec3035ac5ca9c14566ff7d15665fee18ca347dfe98ec9cf892e8690b5', 3, 1, 'authToken', '[]', 0, '2022-05-02 03:15:55', '2022-05-02 03:15:55', '2023-05-02 04:15:55'),
('e47225fd789b577f23b820a50c963463342f28f82afbe86bce7e7c25a894b21e00b2dedac26669a2', 3, 1, 'authToken', '[]', 0, '2022-05-02 03:15:43', '2022-05-02 03:15:43', '2023-05-02 04:15:43'),
('fd420786311f6a1fe9595c2df4e8f708e8151a476ef87381b615e69e0fd0c8f3057ec8fbb9de2e87', 3, 1, 'authToken', '[]', 0, '2022-05-02 02:58:34', '2022-05-02 02:58:34', '2023-05-02 03:58:34');

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `oauth_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `provider` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `provider`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Laravel Personal Access Client', 'T1GjoQRY7XPiiFv7zRmZjJXB3xSv7MrHrReEtrEN', NULL, 'http://localhost', 1, 0, 0, '2022-05-02 02:58:15', '2022-05-02 02:58:15'),
(2, NULL, 'Laravel Password Grant Client', 'OCB4pvz54Ojya4NKmmg6EPFrhVDZG30M1RWYSupy', 'users', 'http://localhost', 0, 1, 0, '2022-05-02 02:58:15', '2022-05-02 02:58:15');

CREATE TABLE `oauth_personal_access_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `oauth_personal_access_clients` (`id`, `client_id`, `created_at`, `updated_at`) VALUES
(1, 1, '2022-05-02 02:58:15', '2022-05-02 02:58:15');

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `class` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` int(11) NOT NULL DEFAULT 1,
  `photo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `departement` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `phone`, `class`, `type`, `photo`, `departement`, `remember_token`, `created_at`, `updated_at`) VALUES
(3, 'John Doe', 'doe@example.com', NULL, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '22222123', 'INDP1 A', 1, NULL, NULL, NULL, '2022-05-02 02:58:34', '2022-05-02 02:58:34');


ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

ALTER TABLE `files`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_access_tokens_user_id_index` (`user_id`);

ALTER TABLE `oauth_auth_codes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_auth_codes_user_id_index` (`user_id`);

ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_clients_user_id_index` (`user_id`);

ALTER TABLE `oauth_personal_access_clients`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `oauth_refresh_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`);

ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);


ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

ALTER TABLE `files`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

ALTER TABLE `oauth_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

ALTER TABLE `oauth_personal_access_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;
