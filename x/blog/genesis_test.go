package blog_test

import (
	"testing"

	keepertest "blog/testutil/keeper"
	"blog/testutil/nullify"
	"blog/x/blog"
	"blog/x/blog/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		PostList: []types.Post{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		PostCount: 2,
		CommentList: []types.Comment{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		CommentCount: 2,
		TitleList: []types.Title{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		TitleCount: 2,
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.BlogKeeper(t)
	blog.InitGenesis(ctx, *k, genesisState)
	got := blog.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.PostList, got.PostList)
	require.Equal(t, genesisState.PostCount, got.PostCount)
	require.ElementsMatch(t, genesisState.CommentList, got.CommentList)
	require.Equal(t, genesisState.CommentCount, got.CommentCount)
	require.ElementsMatch(t, genesisState.TitleList, got.TitleList)
	require.Equal(t, genesisState.TitleCount, got.TitleCount)
	// this line is used by starport scaffolding # genesis/test/assert
}
