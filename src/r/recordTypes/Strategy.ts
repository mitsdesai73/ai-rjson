/** Stored in deployment.settings */
export enum StrategyProperty {
  deployment_version = "deployment_version",
  geolock_enabled = "geolock_enabled",
  geolock_coordinates = "geolock_coordinates",
  geolock_range = "geolock_range",
  geolock_address = "geolock_address",
  track_location = "track_location",
  enable_multiplayer = "enable_multiplayer",
  multiplayer_audio_enabled = "multiplayer_audio_enabled",
  multiplayer_video_enabled = "multiplayer_video_enabled",
  multiplayer_chat_enabled = "multiplayer_chat_enabled",
  multiplayer_screenshare_enabled = "multiplayer_screenshare_enabled",
  multiplayer_comments_enabled = "multiplayer_comments_enabled",
  enable_room_instance = "enable_room_instance",
  room_instance_count = "room_instance_count",
  room_instance_member_limit = "room_instance_member_limit",
  room_instance_overspill_message = "room_instance_overspill_message",
}

export const strategyPropertyDefaults:  Record<StrategyProperty, unknown> = {
  [StrategyProperty.deployment_version]: 0,
  [StrategyProperty.geolock_enabled]: false,
  [StrategyProperty.geolock_coordinates]: [0, 0],
  [StrategyProperty.geolock_range]: 0,
  [StrategyProperty.geolock_address]: "",
  [StrategyProperty.track_location]: false,
  [StrategyProperty.enable_multiplayer]: false,
  [StrategyProperty.multiplayer_audio_enabled]: true,
  [StrategyProperty.multiplayer_video_enabled]: true,
  [StrategyProperty.multiplayer_chat_enabled]: true,
  [StrategyProperty.multiplayer_screenshare_enabled]: true,
  [StrategyProperty.multiplayer_comments_enabled]: false,
  [StrategyProperty.enable_room_instance]: false,
  [StrategyProperty.room_instance_count]: 1,
  [StrategyProperty.room_instance_member_limit]: 6,
  [StrategyProperty.room_instance_overspill_message]: "Looks like all rooms are full. Check back again after some time. You can still explore this space.",
};
