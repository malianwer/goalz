if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "/Users/mac/.gradle/caches/transforms-3/633188b2fe96cfe864e8a484846e336e/transformed/jetified-hermes-android-0.73.6-debug/prefab/modules/libhermes/libs/android.arm64-v8a/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/mac/.gradle/caches/transforms-3/633188b2fe96cfe864e8a484846e336e/transformed/jetified-hermes-android-0.73.6-debug/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()
