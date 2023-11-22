export type ApiServer = {
    id: string;
    version: string;
    hostname: string;
    hostnameV4: string;
    ipv4: string;
    ipv6: string;
    endpoint: string;
    discreteFourierTransformBias: number;
};

export type ApiPartyPlayer = {
    id: string;
    name: string;
    ready: boolean;
    leader: boolean;
    level: number;
    inRound: boolean;
};

export type ApiParty = {
    key: string;
    created: number;
    updated: number;
    state: string;
    version: string;
    gameMode: string;
    metadata: string;
    region: string;
    autofill: boolean;
    players: ApiPartyPlayer[];
};

export type ApiUserReward = {
    type: string;
    itemId: number;
    itemSku: string;
    packId: number;
    packSku: string;
    quantity: number;
    duplicateItemId: number;
};

export type ApiUserUpcomingReward = ApiUserReward & {
    level: number;
};

export type ApiUserProgression = {
    currentExperience: number;
    requiredExperience: number;
    rewards: ApiUserUpcomingReward[];
};

export type ApiClanMember = {
    id: string;
    friend_code: string;
    name: string;
    avatar: string;
    status: string;
};

export type ApiChatMessage = {
    type: string;
    clan_id: string;
    user_id: string;
    friend_code: string;
    sent: string;
    body: string;
};

export type ApiClan = {
    id: string;
    creator_id: string;
    tag: string;
    name: string;
    description: string;
    privacy: string;
    region: string;
    total_members: string;
    max_members: string;
    members: ApiClanMember[];
    messages: ApiChatMessage[];
};

export type ApiUserLicense = {
    id: number;
    user_id: number;
    item_id: number;
    quantity: number;
};

export type ApiUserPack = {
    id: number;
    user_id: number;
    pack_id: number;
    quantity: number;
};

export type ApiUserSubscription = {
    id: number;
    user_id: number;
    iap_id: number;
};

export type ApiUserIapTransaction = {
    id: number;
    user_id: number;
    iap_id: number;
    cost_dollars: number;
};

export type ApiUser = {
    id: number;
    provider: string;
    identifier: string;
    name: string;
    avatar: string;
    email: string;
    friend_code: string;
    status: string;
    experience: number;
    level: number;
    coins: number;
    gems: number;
    key: string;
    encryptedKey: string;
    progression: ApiUserProgression;
    nextLevelRewards: ApiUserReward[];
    clans: ApiClan[];
    licenses: ApiUserLicense[];
    packs: ApiUserPack[];
    subscriptions: ApiUserSubscription[];
    iaps: ApiUserIapTransaction[];
};

export type ApiResponse = {
    status: string;
    message: string;
};

export type ApiBuyRewardTrackResponse = ApiResponse & {
    user: ApiUser;
    rewards: ApiUserReward[];
};

export type ApiClanAvailableResponse = ApiResponse & {
    clans: ApiClan[];
};

export type ApiClanResponse = ApiResponse & {
    clan: ApiClan;
    user: ApiUser;
};

export type ApiIap = {
    id: number;
    sku: string;
    name: string;
    type: string;
    xsolla_id: number | null;
    apple_id: string;
    google_id: string;
    cost_dollars: number;
    can_purchase: boolean;
    rewards: ApiUserReward[];
};

export type ApiCoinPackage = ApiIap & {
    quantity: number;
};

export type ApiConfig = {
    maintenance: boolean;
    update_required: boolean;
    disable_udp: boolean;
    version: string;
    environment: string;
    endpoint: string;
};

export type ApiConfigABTest = {
    id: string;
    group: string;
};

export type ApiConfigAnnouncement = {
    type: string;
    title: string;
    message: string;
    action: string;
};

export type ApiDate = {
    date: string;
    timezone: string;
};

export type ApiConfigLimitedEvent = {
    name: string;
    type: string;
    tagline: string;
    ends: ApiDate;
};

export type ApiConfigPatchNotesItem = {
    title: string;
    description: string;
    image: string;
};

export type ApiConfigPatchNotes = {
    id: string;
    title: string;
    items: ApiConfigPatchNotesItem[];
};

export type ApiConfigFeaturedYoutuber = {
    name: string;
    channel: string;
    video: string;
};

export type ApiConfigSeasonPreview = {
    season: string;
    current_day: number;
    timer_ends: string;
};

export type ApiConfigGiveawayGroup = {
    name: string;
    starts_at: string;
    ends_at: string;
    rewards: ApiUserReward[];
};

export type ApiConfigGiveaway = {
    id: string;
    name: string;
    description: string;
    groups: ApiConfigGiveawayGroup[];
};

export type ApiConfigExtras = {
    announcement: ApiConfigAnnouncement;
    limited_event: ApiConfigLimitedEvent;
    patch_notes: ApiConfigPatchNotes;
    ab_test: ApiConfigABTest;
    ab_test_2: ApiConfigABTest;
    ab_test_3: ApiConfigABTest;
    featured_youtuber: ApiConfigFeaturedYoutuber;
    season_preview: ApiConfigSeasonPreview;
    giveaway: ApiConfigGiveaway;
    changelog: string;
};

export type ApiConfigUDPToggle = {
    is_enabled: boolean;
};

export type ApiFirstRewardAvailabilityResponse = ApiResponse & {
    available: boolean;
};

export type ApiFirstRewardClaimResponse = ApiResponse & {
    user: ApiUser;
    reward: ApiUserReward;
};

export type ApiFriend = {
    id: string;
    friend_code: string;
    name: string;
    avatar: string;
    status: string;
};

export type ApiFriendRequest = {
    friend_code: string;
    name: string;
    avatar: string;
    sent: string;
};

export type ApiGemPackage = ApiIap & {
    quantity: number;
};

export type ApiGetConfigResponse = ApiResponse & {
    config: ApiConfig;
    extras: ApiConfigExtras;
};

export type ApiGetServerResponse = ApiResponse & {
    server: ApiServer;
};

export type ApiGetUserResponse = ApiResponse & {
    user: ApiUser;
    rewards: ApiUserReward[];
};

export type ApiGiftRewardAvailabilityResponse = ApiResponse & {
    available: boolean;
    next_at: ApiDate;
};

export type ApiGiftRewardClaimResponse = ApiResponse & {
    user: ApiUser;
    reward: ApiUserReward;
    next_at: ApiDate;
};

export type ApiHandleDiscordIapReceiptResponse = ApiResponse & {
    user: ApiUser;
    rewards: ApiUserReward[];
};

export type ApiHandleUnityIapReceiptResponse = ApiResponse & {
    user: ApiUser;
    rewards: ApiUserReward[];
};

export type ApiIapDeal = ApiIap & {};

export type ApiInstagramRewardAvailabilityResponse = ApiResponse & {
    available: boolean;
};

export type ApiInstagramRewardClaimResponse = ApiResponse & {
    user: ApiUser;
    reward: ApiUserReward;
};

export type ApiItem = {
    id: number;
    sku: string;
    name: string;
    type: string;
    category: string;
    rarity: string;
    cost_coins: number;
    cost_gems: number;
    is_stock: boolean;
    can_purchase: boolean;
    order: number;
};

export type ApiJoinTournamentResponse = ApiResponse & {
    mode: string;
};

export type ApiLeaderboardPlayer = {
    name: string;
    rounds: number;
    wins: number;
    top10: number;
    winrate: number;
    kills: number;
    kills_per_round: number;
    time_alive: number;
};

export type ApiLeaderboardResponse = ApiResponse & {
    players: ApiLeaderboardPlayer[];
    user: ApiUser;
};

export type ApiLeaderboardUser = ApiLeaderboardPlayer & {
    rank: number;
};

export type ApiLoggedIn = {};

export type ApiMidSeasonRewardTrackResponse = ApiResponse & {
    is_available: boolean;
    cost_gems: number;
};

export type ApiPackReward = {
    id: number;
    pack_id: number;
    item_id: number;
    item_sku: string;
    weighting: number;
};

export type ApiPack = {
    id: number;
    sku: string;
    name: string;
    cost_coins: number;
    cost_gems: number;
    can_purchase: boolean;
    rewards: ApiPackReward[];
};

export type ApiPackOpenReward = ApiUserReward & {};

export type ApiPackOpenResponse = ApiResponse & {
    user: ApiUser;
    rewards: ApiPackOpenReward[];
};

export type ApiPartyInvite = {
    name: string;
    key: string;
};

export type ApiPartyMetadata = {
    tournamentName: string;
    tournamentCode: string;
};

export type ApiPollOption = {
    id: number;
    name: string;
    color_code: string;
};

export type ApiPoll = {
    id: number;
    question: string;
    options: ApiPollOption[];
};

export type ApiPollAvailableResponse = ApiResponse & {
    poll: ApiPoll[];
};

export type ApiProfileResponse = ApiResponse & {
    user: ApiUser;
    stats: Map<string, Map<string, Map<string, string>>>;
};

export type ApiQuestReward = ApiUserReward & {};

export type ApiUserQuest = {
    id: number;
    uiser_id: number;
    quest_id: number;
    value: number;
    is_completed: boolean;
};

export type ApiQuest = {
    id: number;
    name: string;
    stat_key: string;
    required: number;
    reward: ApiQuestReward;
    created: ApiDate;
    ends: ApiDate;
    personal: ApiUserQuest;
};

export type ApiQuestAvailableResponse = ApiResponse & {
    quests: ApiQuest[];
};

export type ApiRecentPlayer = {
    name: string;
    friend_code: string;
    last_seen: number;
};

export type ApiRecurringRewardAvailabilityResponse = ApiResponse & {
    available: boolean;
    claimed: number;
    total: number;
};

export type ApiRecurringRewardClaimResponse = ApiResponse & {
    user: ApiUser;
    reward: ApiUserReward;
    available: boolean;
    claimed: number;
    total: number;
};

export type ApiRewardTrackTierReward = ApiUserReward & {};

export type ApiRewardTrackTier = {
    id: number;
    track_id: number;
    tier: number;
    rewards: ApiRewardTrackTierReward[];
};

export type ApiUserRewardTrackChallenge = {
    id: number;
    user_id: number;
    challenge_id: number;
    value: number;
    is_completed: boolean;
};

export type ApiRewardTrackChallenge = {
    id: number;
    track_id: number;
    name: string;
    stat_key: string;
    required: number;
    created: ApiDate;
    reward: ApiRewardTrackTierReward;
    personal: ApiUserRewardTrackChallenge;
};

export type ApiRewardTrackEvolution = ApiRewardTrackChallenge & {
    required_item_sku: string;
};

export type ApiUserRewardTrackProgressionTier = {
    currentStars: number;
    requiredStars: number;
};

export type ApiUserRewardTrackProgressionLevel = {
    currentExperience: number;
    requiredExperience: number;
};

export type ApiUserRewardTrack = {
    id: number;
    user_id: number;
    track_id: number;
    experience: number;
    level: number;
    stars: number;
    tier: number;
    has_discount_available: boolean;
    progressionTier: ApiUserRewardTrackProgressionTier;
    progressionLevel: ApiUserRewardTrackProgressionLevel;
};

export type ApiRewardTrack = {
    id: number;
    name: string;
    season: number;
    max_level: number;
    max_tier: number;
    cost_coins: number;
    cost_gems: number;
    cost_gems_per_tier: number;
    is_stock: boolean;
    is_repeatable: boolean;
    created: ApiDate;
    expires: ApiDate;
    tiers: ApiRewardTrackTier[];
    challenges: ApiRewardTrackChallenge[];
    evolutions: ApiRewardTrackEvolution;
    personal: ApiUserRewardTrack;
};

export type ApiRewardType = {
    name: string;
    is_available: boolean;
    next_at: ApiDate;
    claimed: number;
    total: number;
};

export type ApiSession = {
    experienceGained: number;
    levelsGained: number;
    coinsGained: number;
    gemsGained: number;
    packsGained: number[];
    itemsGained: number[];
};

export type ApiTimedDeal = {
    id: number;
    sku: string;
    name: string;
    cost_coins: number;
    cost_gems: number;
    undiscounted_cost_coins: number;
    undiscounted_cost_gems: number;
    can_purchase: boolean;
    rewards: ApiUserReward[];
    created: ApiDate;
    expires: ApiDate;
};

export type ApiShopAvailableResponse = ApiResponse & {
    itemsSignature: string;
    items: ApiItem[];
    packs: ApiPack[];
    timedDeals: ApiTimedDeal[];
    iaps: ApiIap[];
};

export type ApiSkipRewardTrackResponse = ApiResponse & {
    user: ApiUser;
    rewards: ApiUserReward[];
};

export type ApiSubscription = ApiResponse & {};

export type ApiUpdatePartyResponse = ApiResponse & {
    party: ApiParty;
};

export type ApiUserBuyItemResponse = ApiResponse & {
    user: ApiUser;
    rewards: ApiUserReward[];
};

export type ApiUserClan = {
    id: number;
    clan_id: number;
};

export type ApiUserExperienceResponse = ApiResponse & {
    user: ApiUser;
    session: ApiSession;
};

export type ApiUserRewardsClaimResponse = ApiResponse & {
    user: ApiUser;
    rewards: ApiUserReward[];
    is_available: boolean;
    claimed: number;
    total: number;
    next_at: ApiDate;
};

export type ApiUserRewardsResponse = {
    types: ApiRewardType[];
};

export type ApiUserStats = {
    wins: number;
    kills: number;
    top10: number;
    rounds: number;
};

export type ApiValidateLoginResponse = ApiResponse & {
    user: ApiUser;
    firstLogin: boolean;
};

export type ApiValidateAppleResponse = ApiValidateLoginResponse & {};

export type ApiValidateDeviceResponse = ApiValidateLoginResponse & {};

export type ApiValidateDiscordResponse = ApiValidateLoginResponse & {};

export type ApiValidateFacebookResponse = ApiValidateLoginResponse & {};

export type ApiValidateGameCenterResponse = ApiValidateLoginResponse & {};

export type ApiValidateGoogleResponse = ApiValidateLoginResponse & {};

export type ApiVideoRewardAvailabilityResponse = ApiResponse & {
    available: boolean;
    next_at: ApiDate;
};

export type ApiVideoRewardClaimResponse = ApiResponse & {
    user: ApiUser;
    reward: ApiUserReward;
    next_at: ApiDate;
};
